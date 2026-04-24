// variant-terminus.jsx — Technical / terminal aesthetic
// Dark, electric green accent, JetBrains Mono + IBM Plex Sans

const TerminusCV = () => {
  const d = window.CV_DATA;
  const S = {
    root: {
      width: '100%', minHeight: '100%',
      background: '#0a0b0d',
      color: '#d4d7db',
      fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
      fontSize: '14px',
      lineHeight: 1.55,
      position: 'relative',
      overflow: 'hidden',
    },
    grid: {
      position: 'absolute', inset: 0,
      backgroundImage: 'linear-gradient(rgba(80,255,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(80,255,160,0.03) 1px, transparent 1px)',
      backgroundSize: '48px 48px',
      pointerEvents: 'none',
    },
    scanline: {
      position: 'absolute', inset: 0,
      background: 'repeating-linear-gradient(0deg, transparent 0, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)',
      pointerEvents: 'none',
    },
    container: {
      maxWidth: 1080, margin: '0 auto', padding: '56px 56px 80px',
      position: 'relative',
    },
    mono: { fontFamily: '"JetBrains Mono", ui-monospace, monospace' },
    accent: { color: '#6fff9e' },
    dim: { color: '#7a828b' },
    hr: { border: 'none', borderTop: '1px dashed rgba(111,255,158,0.22)', margin: '0' },
  };

  const Section = ({ num, id, title, children }) => (
    <section style={{ marginTop: 64 }} id={id}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
        <span style={{ ...S.mono, ...S.accent, fontSize: 12, letterSpacing: '0.08em' }}>
          [{num}]
        </span>
        <h2 style={{ ...S.mono, fontSize: 18, fontWeight: 500, color: '#f0f3f5', letterSpacing: '0.02em', margin: 0 }}>
          {title}
        </h2>
        <div style={{ flex: 1, borderBottom: '1px dashed rgba(111,255,158,0.2)', marginBottom: 4 }} />
      </div>
      {children}
    </section>
  );

  const Chip = ({ children }) => (
    <span style={{ ...S.mono, fontSize: 11, padding: '4px 9px', border: '1px solid rgba(111,255,158,0.25)', borderRadius: 3, color: '#b8ffd1', background: 'rgba(111,255,158,0.04)', whiteSpace: 'nowrap' }}>
      {children}
    </span>
  );

  return (
    <div style={S.root}>
      <div style={S.grid} />
      <div style={S.scanline} />
      <div style={S.container}>

        {/* TOP BAR */}
        <div style={{ ...S.mono, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#7a828b', borderBottom: '1px solid rgba(111,255,158,0.18)', paddingBottom: 10 }}>
          <span><span style={S.accent}>●</span> cody@terminus <span style={S.dim}>—</span> ~/cv</span>
          <span>{d.location} · v2026.04</span>
        </div>

        {/* HERO */}
        <header style={{ marginTop: 40 }}>
          <div style={{ ...S.mono, fontSize: 12, color: '#6fff9e', marginBottom: 18 }}>
            $ whoami --verbose
          </div>
          <h1 style={{
            fontFamily: '"JetBrains Mono", ui-monospace, monospace',
            fontSize: 64, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em',
            color: '#f4f6f8', margin: 0,
          }}>
            {d.name}<span style={S.accent}>_</span>
          </h1>
          <p style={{ fontSize: 18, color: '#d4d7db', marginTop: 18, marginBottom: 6, maxWidth: 720 }}>
            {d.tagline}.
          </p>
          <p style={{ ...S.mono, fontSize: 12, color: '#7a828b', margin: 0, letterSpacing: '0.03em' }}>
            {d.role} · {d.location}
          </p>

          <div style={{ display: 'flex', gap: 10, marginTop: 28, flexWrap: 'wrap' }}>
            <a href={`mailto:${d.email}`} style={{ ...S.mono, fontSize: 12, color: '#0a0b0d', background: '#6fff9e', padding: '9px 14px', borderRadius: 3, textDecoration: 'none', fontWeight: 500 }}>
              → {d.email}
            </a>
            <a href={`https://${d.linkedin}`} style={{ ...S.mono, fontSize: 12, color: '#b8ffd1', border: '1px solid rgba(111,255,158,0.35)', padding: '9px 14px', borderRadius: 3, textDecoration: 'none' }}>
              linkedin/cody-champion
            </a>
          </div>
        </header>

        {/* OUTCOMES */}
        <Section num="01" id="outcomes" title="SELECTED_OUTCOMES">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'rgba(111,255,158,0.18)', border: '1px solid rgba(111,255,158,0.18)' }}>
            {d.outcomes.map((o, i) => (
              <div key={i} style={{ background: '#0a0b0d', padding: '24px 22px' }}>
                <div style={{ ...S.mono, fontSize: 36, color: '#6fff9e', letterSpacing: '-0.02em', lineHeight: 1 }}>{o.metric}</div>
                <div style={{ fontSize: 13, color: '#aab1b8', marginTop: 10, lineHeight: 1.5 }}>{o.label}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* SUMMARY */}
        <Section num="02" id="about" title="ABOUT">
          <p style={{ fontSize: 15, color: '#d4d7db', maxWidth: 820, margin: 0 }}>{d.summary}</p>
          <p style={{ fontSize: 15, color: '#aab1b8', maxWidth: 820, marginTop: 18 }}>{d.narrative}</p>

          <div style={{ marginTop: 28, ...S.mono, fontSize: 12, color: '#7a828b' }}># current focus</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '14px 0 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
            {d.focus.map((f, i) => (
              <li key={i} style={{ fontSize: 13, color: '#d4d7db', paddingLeft: 18, position: 'relative' }}>
                <span style={{ ...S.mono, color: '#6fff9e', position: 'absolute', left: 0 }}>→</span>
                {f}
              </li>
            ))}
          </ul>
        </Section>

        {/* EXPERIENCE */}
        <Section num="03" id="experience" title="WORK_EXPERIENCE">
          {d.experience.map((e, i) => (
            <article key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: 32, padding: '22px 0', borderTop: i === 0 ? 'none' : '1px dashed rgba(111,255,158,0.12)' }}>
              <div>
                <div style={{ ...S.mono, fontSize: 11, color: '#6fff9e', letterSpacing: '0.05em' }}>{e.period}</div>
                <div style={{ ...S.mono, fontSize: 11, color: '#7a828b', marginTop: 6 }}>{e.location}</div>
              </div>
              <div>
                <div style={{ fontSize: 11, ...S.mono, color: '#7a828b', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{e.company}</div>
                <h3 style={{ fontSize: 20, color: '#f4f6f8', margin: '4px 0 2px', fontWeight: 500 }}>{e.role}</h3>
                <div style={{ fontSize: 13, color: '#b8ffd1', ...S.mono, marginBottom: 14 }}>{e.sub}</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 13, color: '#c4cbd2', paddingLeft: 20, marginBottom: 8, position: 'relative', lineHeight: 1.6 }}>
                      <span style={{ ...S.mono, color: '#6fff9e', position: 'absolute', left: 0, opacity: 0.65 }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Section>

        {/* SKILLS */}
        <Section num="04" id="skills" title="TECH_STACK">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {d.skills.map((s, i) => (
              <div key={i}>
                <div style={{ ...S.mono, fontSize: 11, color: '#6fff9e', letterSpacing: '0.08em', marginBottom: 12, textTransform: 'uppercase' }}>
                  /{s.group}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {s.items.map((it, j) => <Chip key={j}>{it}</Chip>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section num="05" id="education" title="EDUCATION">
          {d.education.map((e, i) => (
            <div key={i} style={{ marginBottom: 22 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
                <div>
                  <h3 style={{ fontSize: 17, color: '#f4f6f8', margin: 0, fontWeight: 500 }}>{e.degree}</h3>
                  <div style={{ fontSize: 13, color: '#b8ffd1', ...S.mono, marginTop: 4 }}>{e.school}</div>
                </div>
                <span style={{ ...S.mono, fontSize: 11, color: '#7a828b' }}>{e.period}</span>
              </div>
              <p style={{ fontSize: 13, color: '#aab1b8', margin: '10px 0 0', maxWidth: 820 }}>{e.detail}</p>
            </div>
          ))}
        </Section>

        {/* PUBLICATIONS */}
        <Section num="06" id="publications" title="PUBLICATIONS">
          <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {d.publications.map((p, i) => (
              <li key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 120px', gap: 16, padding: '14px 0', borderTop: '1px solid rgba(111,255,158,0.1)', alignItems: 'baseline' }}>
                <span style={{ ...S.mono, fontSize: 11, color: '#7a828b' }}>0{i + 1}</span>
                <div>
                  <span style={{ fontSize: 13, color: '#e4e7eb' }}>
                    {p.firstAuthor && <span style={{ color: '#6fff9e' }}>★ </span>}
                    {p.title}
                  </span>
                  <div style={{ ...S.mono, fontSize: 11, color: '#7a828b', marginTop: 4 }}>{p.venue}</div>
                </div>
                <span style={{ ...S.mono, fontSize: 11, color: '#6fff9e', textAlign: 'right' }}>{p.year}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* PATENTS */}
        <Section num="07" id="patents" title="PATENTS">
          {d.patents.map((p, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 140px', gap: 16, padding: '14px 0', borderTop: i === 0 ? '1px solid rgba(111,255,158,0.1)' : '1px solid rgba(111,255,158,0.1)', alignItems: 'baseline' }}>
              <span style={{ fontSize: 13, color: '#e4e7eb' }}>{p.title}</span>
              <span style={{ ...S.mono, fontSize: 11, color: '#6fff9e', textAlign: 'right' }}>{p.id}</span>
            </div>
          ))}
        </Section>

        {/* AWARDS */}
        <Section num="08" id="awards" title="AWARDS_&_CERTS">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px 32px' }}>
            {d.awards.map((a, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '8px 0', borderBottom: '1px dotted rgba(111,255,158,0.12)' }}>
                <span style={{ ...S.mono, fontSize: 11, color: '#6fff9e', width: 72, flexShrink: 0 }}>{a.year}</span>
                <div style={{ fontSize: 12, color: '#d4d7db' }}>
                  {a.title}
                  <div style={{ ...S.mono, fontSize: 10, color: '#7a828b', marginTop: 2 }}>{a.org}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* FOOTER */}
        <footer style={{ marginTop: 80, paddingTop: 24, borderTop: '1px dashed rgba(111,255,158,0.22)', ...S.mono, fontSize: 11, color: '#7a828b', display: 'flex', justifyContent: 'space-between' }}>
          <span>$ exit 0</span>
          <span><span style={S.accent}>●</span> connection stable</span>
        </footer>

      </div>
    </div>
  );
};

window.TerminusCV = TerminusCV;
