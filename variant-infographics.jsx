// variant-infographics.jsx — Domain Expertise infographics
// Designed for Quiet Weight aesthetic (warm black + amber + Instrument Serif)

const DOMAIN_COLORS = {
  genai: '#e8a44c',     // amber — primary
  cv: '#d4885a',        // warm terracotta
  mlops: '#b8926a',     // warm taupe
  gov: '#e8c67c',       // lighter amber
  ml: '#c79a5c',        // ochre
  research: '#a88654',  // muted bronze
};

// ——— DOMAIN EXPERTISE (quantified bars) ———————————————
// Two real, countable metrics per domain: years active + shipped projects.
// No fabricated "depth" score.
const DomainBars = ({ data, amber, S }) => {
  const maxYears = Math.max(...data.map(d => d.years));
  const maxProj = Math.max(...data.map(d => d.projects));

  return (
    <div>
      {/* column headers */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr 1fr',
        gap: 32,
        padding: '0 0 14px',
        borderBottom: '1px solid rgba(232,164,76,0.35)',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 10,
        letterSpacing: '0.12em',
        color: amber,
      }}>
        <div>DOMAIN</div>
        <div>YEARS ACTIVE <span style={{ color: '#8a8275' }}>/ max {maxYears}</span></div>
        <div>SHIPPED PROJECTS <span style={{ color: '#8a8275' }}>/ max {maxProj}</span></div>
      </div>

      {data.map((d, i) => (
        <div key={i} title={d.note} style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr 1fr',
          gap: 32,
          padding: '18px 0',
          borderBottom: '1px solid rgba(232,164,76,0.15)',
          alignItems: 'center',
        }}>
          {/* label */}
          <div>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 20, color: '#faf5eb', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
              {d.axis}
            </div>
            <div style={{ fontSize: 12, color: '#8a8275', marginTop: 4, lineHeight: 1.45 }}>
              {d.note}
            </div>
          </div>
          {/* years bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ flex: 1, height: 10, background: 'rgba(232,164,76,0.08)', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: 0, bottom: 0, left: 0,
                width: `${(d.years / maxYears) * 100}%`,
                background: amber,
              }} />
            </div>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 26, color: amber, lineHeight: 1, minWidth: 44, textAlign: 'right', letterSpacing: '-0.02em' }}>
              {d.years}
            </div>
          </div>
          {/* projects bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ flex: 1, height: 10, background: 'rgba(232,164,76,0.08)', position: 'relative' }}>
              <div style={{
                position: 'absolute', top: 0, bottom: 0, left: 0,
                width: `${(d.projects / maxProj) * 100}%`,
                background: 'rgba(232,164,76,0.55)',
              }} />
            </div>
            <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 26, color: '#faf5eb', lineHeight: 1, minWidth: 44, textAlign: 'right', letterSpacing: '-0.02em' }}>
              {d.projects}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ——— TIMELINE — horizontal rail with alternating labels ——————
const Timeline = ({ data, amber, S }) => {
  const years = data.map(d => d.year);
  const yMin = Math.min(...years), yMax = Math.max(...years);
  const span = yMax - yMin;
  const pad = 60; // side padding so end labels don't clip

  return (
    <div style={{ position: 'relative', padding: '0' }}>
      {/* the rail itself + its rows */}
      <div style={{ position: 'relative', height: 280, marginLeft: pad, marginRight: pad }}>
        {/* axis line — dead center */}
        <div style={{
          position: 'absolute', left: 0, right: 0, top: 140, height: 1,
          background: 'rgba(232,164,76,0.3)',
        }} />
        {/* end caps */}
        <div style={{ position: 'absolute', left: 0, top: 134, width: 1, height: 13, background: 'rgba(232,164,76,0.35)' }} />
        <div style={{ position: 'absolute', right: 0, top: 134, width: 1, height: 13, background: 'rgba(232,164,76,0.35)' }} />

        {data.map((d, i) => {
          const pct = ((d.year - yMin) / span) * 100;
          const c = DOMAIN_COLORS[d.color] || amber;
          const isTop = i % 2 === 0;

          return (
            <div key={i} style={{
              position: 'absolute', left: `${pct}%`, top: 0, bottom: 0,
              transform: 'translateX(-50%)',
              width: 180,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
              {/* top label block (only rendered for top-side nodes) */}
              <div style={{
                height: 120,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center',
                paddingBottom: 10,
                visibility: isTop ? 'visible' : 'hidden',
              }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, color: amber,
                  letterSpacing: '0.12em', marginBottom: 6,
                }}>
                  {d.year}
                </div>
                <div style={{
                  fontFamily: 'Instrument Serif, serif', fontSize: 15, color: '#faf5eb',
                  lineHeight: 1.3, textAlign: 'center', textWrap: 'pretty',
                }}>
                  {d.label}
                </div>
              </div>

              {/* connector stub (top) */}
              <div style={{
                width: 1, height: 10, background: 'rgba(232,164,76,0.4)',
                visibility: isTop ? 'visible' : 'hidden',
              }} />

              {/* node — baseline = 140px */}
              <div style={{
                width: 10, height: 10, borderRadius: '50%', background: c,
                boxShadow: `0 0 0 3px #0f0d0a, 0 0 0 4px ${c}55`,
                flexShrink: 0,
              }} />

              {/* connector stub (bottom) */}
              <div style={{
                width: 1, height: 10, background: 'rgba(232,164,76,0.4)',
                visibility: isTop ? 'hidden' : 'visible',
              }} />

              {/* bottom label block */}
              <div style={{
                height: 120,
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center',
                paddingTop: 10,
                visibility: isTop ? 'hidden' : 'visible',
              }}>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, color: amber,
                  letterSpacing: '0.12em', marginBottom: 6,
                }}>
                  {d.year}
                </div>
                <div style={{
                  fontFamily: 'Instrument Serif, serif', fontSize: 15, color: '#faf5eb',
                  lineHeight: 1.3, textAlign: 'center', textWrap: 'pretty',
                }}>
                  {d.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ——— SKILL TREE ——————————————————————————————————
const SkillTree = ({ data, amber, S }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px 56px' }}>
      {data.map((d, i) => {
        const c = DOMAIN_COLORS[d.color] || amber;
        return (
          <div key={i}>
            {/* domain header */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, paddingBottom: 16, borderBottom: `1px solid ${c}55` }}>
              <div style={{ width: 10, height: 10, background: c, marginTop: 4 }} />
              <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: 28, color: '#faf5eb', letterSpacing: '-0.015em', lineHeight: 1 }}>
                {d.domain}
              </div>
              <div style={{ marginLeft: 'auto', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: c, letterSpacing: '0.08em' }}>
                {d.count} PROJECTS
              </div>
            </div>
            {/* children as tags with varying weight */}
            <div style={{ marginTop: 18, display: 'flex', flexWrap: 'wrap', gap: '8px 10px' }}>
              {d.children.map((child, j) => {
                const heavy = child.size === 'heavy';
                return (
                  <span key={j} style={{
                    fontFamily: 'Manrope, system-ui, sans-serif',
                    fontSize: heavy ? 14 : 12.5,
                    fontWeight: heavy ? 600 : 400,
                    color: heavy ? '#faf5eb' : '#c4bba9',
                    padding: heavy ? '8px 14px' : '6px 12px',
                    border: heavy ? `1px solid ${c}` : `1px solid ${c}55`,
                    background: heavy ? `${c}22` : 'transparent',
                    borderRadius: 2,
                    lineHeight: 1.2,
                  }}>
                    {child.label}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ——— FULL SECTION ——————————————————————————————
const ExpertiseInfographics = ({ data, amber, S, Num }) => {
  return (
    <>
      {/* RADAR + LEGEND */}
      <section id="sec-domain" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 8 }}>
          <Num n="04" />
          <div style={S.eyebrow}>Domain Expertise</div>
        </div>
        <p style={{ fontSize: 15, color: '#b8afa0', margin: '0 0 48px 72px', fontStyle: 'italic', lineHeight: 1.5, maxWidth: 760 }}>
          Two countable metrics per domain, derived only from documented work: <em style={{ color: amber }}>years active</em> (from first shipped artifact in that area — job, publication, or patent) and <em style={{ color: amber }}>shipped projects</em> (distinct production systems, peer-reviewed papers, patents, or named programs — not sub-tasks). Hover a row to see what the count contains.
        </p>

        <div style={{ marginLeft: 72 }}>
          <DomainBars data={data.radar} amber={amber} S={S} />
        </div>
      </section>

      {/* TIMELINE */}
      <section id="sec-trajectory" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 8 }}>
          <Num n="05" />
          <div style={S.eyebrow}>Trajectory</div>
        </div>
        <Timeline data={data.timeline} amber={amber} S={S} />
      </section>

      {/* SKILL TREE */}
      <section id="sec-capabilities" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 8 }}>
          <Num n="06" />
          <div style={S.eyebrow}>Capability Map</div>
        </div>
        <p style={{ fontSize: 15, color: '#b8afa0', margin: '0 0 48px 72px', fontStyle: 'italic', lineHeight: 1.5, maxWidth: 720 }}>
          Sub-capabilities by domain. <em style={{ color: amber }}>Filled tags</em> = heavy production experience; outlined = working familiarity.
        </p>
        <div style={{ marginLeft: 72 }}>
          <SkillTree data={data.tree} amber={amber} S={S} />
        </div>
      </section>
    </>
  );
};

// expose globally
window.ExpertiseInfographics = ExpertiseInfographics;
