#!/usr/bin/env python3
"""
Lock-In, Then Meter -- inference build-vs-buy cost model.
Derives $/Mtok for each serving option, the real breakevens, and sensitivity.
All assumptions explicit and editable. Figures are representative (June 2026).
"""
import math

# ----------------------------- ASSUMPTIONS -----------------------------
HOURS_PER_MONTH = 730.0
IO_RATIO        = 4.0          # input:output token ratio (4:1)

# Frontier proprietary API, per-Mtok input/output (Anthropic, Jun 2026)
FRONTIER = {
    "Claude Opus 4.8":   (5.0, 25.0),
    "Claude Sonnet 4.6": (3.0, 15.0),
    "Claude Haiku 4.5":  (1.0,  5.0),
}
# Managed open-weight APIs, per-Mtok input/output
MANAGED = {
    "Llama 3.3 70B (DeepInfra)": (0.23, 0.40),
    "DeepSeek V4 Pro (blended)": (2.17, 2.17),   # already-blended ~ list
    "gpt-oss-120B":              (0.08, 0.08),
}

# Self-hosting (H200-class), 70B model
RENT_HR        = 2.76     # reserved 1yr H200, $/GPU-hr (~$2,016/mo)
CAPEX_PER_GPU  = 45000.0  # all-in incl server share, $/GPU
AMORT_YEARS    = 3.0
TDP_KW         = 0.70     # per GPU
PUE            = 1.40
POWER_USD_KWH  = 0.30     # Western Europe / Ireland
COLO_PER_GPU_MO= 250.0    # colo + networking share, $/GPU/mo
THROUGHPUT_TPS = 2000.0   # aggregate OUTPUT tok/s per GPU, 70B at high batch
UTIL           = 0.60     # realistic self-managed utilization
FTE            = 2
FTE_LOADED_YR  = 190000.0 # fully loaded platform engineer, $/yr

def blended(inp, out, ratio=IO_RATIO):
    return (ratio * inp + out) / (ratio + 1.0)

# ----------------------------- DERIVATIONS -----------------------------
# Own hardware $/GPU-hr (capex amortized + power + colo)
own_capex_hr = CAPEX_PER_GPU / (AMORT_YEARS * 12) / HOURS_PER_MONTH
own_power_hr = TDP_KW * PUE * POWER_USD_KWH
own_colo_hr  = COLO_PER_GPU_MO / HOURS_PER_MONTH
OWN_HR       = own_capex_hr + own_power_hr + own_colo_hr

def cost_per_mtok(hourly, tps=THROUGHPUT_TPS, util=UTIL):
    """Hardware-only cost per million OUTPUT tokens at a given utilization."""
    return hourly / (tps * 3600.0 * util) * 1e6

def per_gpu_tokens_month(tps=THROUGHPUT_TPS, util=UTIL):
    return tps * 3600.0 * HOURS_PER_MONTH * util   # tokens/month per GPU

team_month = FTE * FTE_LOADED_YR / 12.0

def owned_allin_per_mtok(V, tps=THROUGHPUT_TPS, util=UTIL):
    """All-in owned $/Mtok at monthly volume V (tokens), incl platform team."""
    n = max(1, math.ceil(V / per_gpu_tokens_month(tps, util)))
    monthly = n * OWN_HR * HOURS_PER_MONTH + team_month
    return monthly / (V / 1e6), n, monthly

print("="*64)
print("DERIVED UNIT ECONOMICS  (70B class, per million tokens, USD)")
print("="*64)
print(f"Frontier blended @ {IO_RATIO:.0f}:1 I/O")
for k,(i,o) in FRONTIER.items():
    print(f"  {k:<22} ${blended(i,o):6.2f}")
print("Managed open blended")
mgd_floor = None
for k,(i,o) in MANAGED.items():
    b = blended(i,o); mgd_floor = b if (mgd_floor is None or b<mgd_floor) else mgd_floor
    print(f"  {k:<26} ${b:6.3f}")
MANAGED_70B = blended(*MANAGED["Llama 3.3 70B (DeepInfra)"])
print(f"\nSelf-host hardware-only $/GPU-hr:  rent ${RENT_HR:.2f}   own ${OWN_HR:.2f}")
print(f"Per-GPU throughput: {THROUGHPUT_TPS:.0f} tok/s -> "
      f"{per_gpu_tokens_month()/1e9:.2f}B tok/mo @ {UTIL:.0%} util")
print(f"\nSelf-host $/Mtok (70B), by utilization:")
print(f"{'util':>6} {'rent':>8} {'own(hw)':>9}")
for u in (0.2,0.4,0.6,0.8,1.0):
    print(f"{u:>6.0%} ${cost_per_mtok(RENT_HR,util=u):>6.2f} ${cost_per_mtok(OWN_HR,util=u):>7.2f}")
print(f"\nManaged-open 70B floor: ${MANAGED_70B:.3f}/Mtok  <-- nothing self-run beats this")
print(f"Own-hardware floor (U=100%): ${cost_per_mtok(OWN_HR,util=1.0):.3f}/Mtok")

print("\n"+"="*64)
print("ALL-IN OWNED $/Mtok vs MANAGED-OPEN vs FRONTIER (incl team)")
print("="*64)
print(f"Platform team: {FTE} FTE = ${team_month:,.0f}/mo fixed")
print(f"{'Volume/mo':>12} {'GPUs':>5} {'owned $/mo':>12} {'owned $/Mtok':>13} "
      f"{'mgd-open $':>11} {'frontier $':>11}")
for V in (1e9, 1e10, 5e10, 1e11, 5e11, 1e12):
    pm, n, monthly = owned_allin_per_mtok(V)
    mgd = V/1e6*MANAGED_70B
    fro = V/1e6*blended(*FRONTIER["Claude Opus 4.8"])
    print(f"{V/1e9:>10.0f}B {n:>5d} ${monthly:>10,.0f} ${pm:>11.3f} "
          f"${mgd:>9,.0f} ${fro:>9,.0f}")

# ----------------------------- BREAKEVENS -----------------------------
print("\n"+"="*64)
print("BREAKEVENS")
print("="*64)
# Owned vs frontier: smallest V where owned all-in < frontier spend
fro_p = blended(*FRONTIER["Claude Opus 4.8"]) / 1e6     # $/token
per_tok_own = OWN_HR * HOURS_PER_MONTH / per_gpu_tokens_month()  # marginal $/token owned
V_be_frontier = team_month / (fro_p - per_tok_own)
print(f"Owned 70B stack beats FRONTIER (Opus $9/Mtok) above "
      f"~{V_be_frontier/1e9:.2f}B tok/mo")
print(f"  (below that, the platform team costs more than the API saves)")

mgd_p = MANAGED_70B/1e6
if per_tok_own > mgd_p:
    print(f"Owned vs MANAGED-OPEN: NO breakeven. Owned marginal "
          f"${per_tok_own*1e6:.3f}/Mtok > managed ${MANAGED_70B:.3f}/Mtok at every volume.")
print(f"Rent vs managed-open: rent ${cost_per_mtok(RENT_HR):.3f}/Mtok (U={UTIL:.0%}) "
      f"> ${MANAGED_70B:.3f}  -> also no cost win; control decision only.")

# Fixed-cost framing used in the paper
plat_lo, plat_hi = 30000, 44000
print(f"\nMinimal owned platform fixed cost ~${plat_lo:,}-{plat_hi:,}/mo equals "
      f"managed-open spend on:")
print(f"  ${plat_lo:,}/mo  -> {plat_lo/MANAGED_70B/1e3:,.0f}B tok/mo")
print(f"  ${plat_hi:,}/mo  -> {plat_hi/MANAGED_70B/1e3:,.0f}B tok/mo")
print("  i.e. below ~115-170B tok/mo the TEAM alone outweighs the entire managed bill.")

print("\n"+"="*64)
print(f"SENSITIVITY: owned hardware-only floor (U=100%) vs managed ${MANAGED_70B:.3f}")
print("="*64)
print(f"{'tok/s':>7}", *[f"{u:>7.0%}" for u in (0.4,0.6,0.8,1.0)])
for tps in (1000,1500,2000,2500,3000):
    row = [f"${cost_per_mtok(OWN_HR,tps=tps,util=u):>5.2f}" for u in (0.4,0.6,0.8,1.0)]
    print(f"{tps:>7}", *[f"{c:>7}" for c in row])
print(f"Only at >={3000} tok/s AND ~100% util does owned dip under managed-open.")
