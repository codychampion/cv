// variant-signal.jsx — Swiss executive minimal
// Cool near-black, electric blue accent, Space Grotesk + IBM Plex Mono

const SignalCV = () => {
  const d = window.CV_DATA;
  const bg = '#0b0d10';
  const fg = '#e6ebf1';
  const dim = '#8a94a3';
  const blue = '#5aa0ff';
  const grid = 'rgba(138,148,163,0.14)';

  const S = {
    root: {
      background: bg,
      color: fg,
      fontFamily: '"Space Grotesk", system-ui, sans-serif',
      fontSize: 14,
      lineHeight: 1.5,
    },
    mono: { fontFamily: '"IBM Plex Mono", ui-monospace, monospace' },
    tick: { fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: dim, fontFamily: '"IBM Plex Mono", ui-monospace, monospace' },
  };

  const SectionHeader = ({ num, title, count }) => (
    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', alignItems: 'baseline', padding: '18px 0', borderTop: `1px solid ${grid}`, borderBottom: `1px solid ${grid}`, marginBottom: 32 }}>
      <div style={{ ...S.mono, fontSize: 11, color: blue, letterSpacing: '0.1em' }}>§ {num}</div>
      <h2 style={{ fontSize: 28, fontWeight: 500, color: fg, margin: 0, letterSpacing: '-0.02em' }}>{title}</h2>
      {count != null && <div style={S.tick}>N = {count}</div>}
    </div>
  );

  return (
    <div style={S.root}>
      {/* MASTHEAD — Swiss grid */}
      <header style={{ padding: '48px 64px 0', borderBottom: `1px solid ${grid}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16, paddingBottom: 16, borderBottom: `1px solid ${grid}` }}>
          <div style={{ gridColumn: 'span 3', ...S.mono, fontSize: 10, color: blue, letterSpacing: '0.14em' }}>CURRICULUM VITAE</div>
          <div style={{ gridColumn: 'span 3', ...S.mono, fontSize: 10, color: dim, letterSpacing: '0.12em' }}>VOL. 01 / 2026</div>
          <div style={{ gridColumn: 'span 3', ...S.mono, fontSize: 10, color: dim, letterSpacing: '0.12em' }}>DUBLIN · IE</div>
          <div style={{ gridColumn: 'span 3', ...S.mono, fontSize: 10, color: dim, letterSpacing: '0.12em', textAlign: 'right' }}>
            <a href={`mailto:${d.email}`} style={{ color: blue, textDecoration: 'none' }}>{d.email}</a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16, padding: '72px 0 64px' }}>
          <div style={{ gridColumn: 'span 8' }}>
            <h1 style={{
              fontSize: 128, fontWeight: 400, lineHeight: 0.92,
              letterSpacing: '-0.045em', margin: 0,
              color: fg,
            }}>
              Cody<br />Champion.
            </h1>
          </div>
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={S.tick}>Current</div>
            <div style={{ fontSize: 18, color: fg, marginTop: 8, lineHeight: 1.4 }}>
              <span style={{ color: blue }}>AI Technical Lead</span> · Accenture<br />
              Enterprise GenAI & Agentic AI<br />
              <span style={{ color: dim }}>Dublin, Ireland · Aug 2025—</span>
            </div>
          </div>

          <div style={{ gridColumn: 'span 8', marginTop: 24 }}>
            <p style={{ fontSize: 22, color: fg, lineHeight: 1.4, margin: 0, textWrap: 'pretty', letterSpacing: '-0.01em' }}>
              {d.tagline}. Written the governance playbook <span style={{ color: blue }}>and</span> shipped the production code.
            </p>
          </div>
          <div style={{ gridColumn: 'span 4', marginTop: 24 }}>
            {/* Photo placeholder */}
            <div style={{
              aspectRatio: '3/4', background: `linear-gradient(135deg, rgba(90,160,255,0.08), rgba(90,160,255,0.02))`,
              border: `1px solid ${grid}`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundImage: `repeating-linear-gradient(-45deg, transparent 0, transparent 10px, rgba(90,160,255,0.05) 10px, rgba(90,160,255,0.05) 11px)`,
            }}>
              <div style={{ ...S.mono, fontSize: 10, color: dim, letterSpacing: '0.15em' }}>PORTRAIT — 3:4</div>
              <div style={{ position: 'absolute', top: 8, left: 8, ...S.mono, fontSize: 9, color: blue, letterSpacing: '0.15em' }}>FIG.01</div>
            </div>
          </div>
        </div>

        {/* Outcome band */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: `1px solid ${grid}` }}>
          {d.outcomes.map((o, i) => (
            <div key={i} style={{ padding: '28px 20px 28px 0', borderRight: i < 3 ? `1px solid ${grid}` : 'none', paddingLeft: i > 0 ? 20 : 0 }}>
              <div style={{ ...S.mono, fontSize: 9, color: blue, letterSpacing: '0.15em' }}>KPI.{String(i + 1).padStart(2, '0')}</div>
              <div style={{ fontSize: 44, color: fg, lineHeight: 1, letterSpacing: '-0.03em', marginTop: 10, fontWeight: 400 }}>{o.metric}</div>
              <div style={{ fontSize: 12, color: dim, marginTop: 10, lineHeight: 1.45, textWrap: 'pretty' }}>{o.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* BODY */}
      <main style={{ padding: '64px 64px 80px' }}>

        {/* ABOUT */}
        <section style={{ marginBottom: 72 }}>
          <SectionHeader num="01" title="Profile" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
            <div style={{ gridColumn: 'span 4' }}>
              <div style={S.tick}>Summary</div>
              <p style={{ fontSize: 14, color: dim, marginTop: 12, lineHeight: 1.6, textWrap: 'pretty' }}>{d.summary}</p>
            </div>
            <div style={{ gridColumn: 'span 5' }}>
              <div style={S.tick}>Narrative</div>
              <p style={{ fontSize: 14, color: fg, marginTop: 12, lineHeight: 1.6, textWrap: 'pretty' }}>{d.narrative}</p>
            </div>
            <div style={{ gridColumn: 'span 3' }}>
              <div style={S.tick}>Focus 2026</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '12px 0 0' }}>
                {d.focus.map((f, i) => (
                  <li key={i} style={{ fontSize: 12, color: fg, padding: '8px 0', borderTop: i === 0 ? 'none' : `1px solid ${grid}`, display: 'flex', gap: 10 }}>
                    <span style={{ ...S.mono, color: blue, fontSize: 10, marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section style={{ marginBottom: 72 }}>
          <SectionHeader num="02" title="Experience" count={d.experience.length} />
          {d.experience.map((e, i) => (
            <article key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16, padding: '28px 0', borderTop: i === 0 ? 'none' : `1px solid ${grid}` }}>
              <div style={{ gridColumn: 'span 2' }}>
                <div style={{ ...S.mono, fontSize: 10, color: blue, letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')} / {String(d.experience.length).padStart(2, '0')}</div>
                <div style={{ ...S.mono, fontSize: 11, color: fg, marginTop: 12, letterSpacing: '0.02em' }}>{e.period}</div>
                <div style={{ ...S.mono, fontSize: 10, color: dim, marginTop: 4 }}>{e.location}</div>
              </div>
              <div style={{ gridColumn: 'span 4' }}>
                <div style={S.tick}>{e.company}</div>
                <h3 style={{ fontSize: 22, color: fg, margin: '8px 0 4px', fontWeight: 500, letterSpacing: '-0.01em', lineHeight: 1.15 }}>{e.role}</h3>
                <div style={{ fontSize: 13, color: blue }}>{e.sub}</div>
              </div>
              <div style={{ gridColumn: 'span 6' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {e.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 13, color: '#c4ccd6', padding: '6px 0', display: 'grid', gridTemplateColumns: '24px 1fr', gap: 8, lineHeight: 1.55 }}>
                      <span style={{ ...S.mono, fontSize: 10, color: blue, paddingTop: 3 }}>—</span>
                      <span style={{ textWrap: 'pretty' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* SKILLS — 6-column grid */}
        <section style={{ marginBottom: 72 }}>
          <SectionHeader num="03" title="Capabilities" count={d.skills.reduce((a, s) => a + s.items.length, 0)} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
            {d.skills.map((s, i) => (
              <div key={i} style={{ gridColumn: 'span 4', borderTop: `1px solid ${grid}`, paddingTop: 14 }}>
                <div style={{ ...S.mono, fontSize: 10, color: blue, letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontSize: 16, color: fg, margin: '6px 0 12px', fontWeight: 500 }}>{s.group}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 6px' }}>
                  {s.items.map((it, j) => (
                    <span key={j} style={{ ...S.mono, fontSize: 11, color: '#c4ccd6', background: 'rgba(138,148,163,0.08)', padding: '3px 8px', borderRadius: 2 }}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section style={{ marginBottom: 72 }}>
          <SectionHeader num="04" title="Education" />
          {d.education.map((e, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16, padding: '22px 0', borderTop: i === 0 ? 'none' : `1px solid ${grid}` }}>
              <div style={{ gridColumn: 'span 2', ...S.mono, fontSize: 11, color: blue }}>{e.period}</div>
              <div style={{ gridColumn: 'span 4' }}>
                <h3 style={{ fontSize: 20, color: fg, margin: 0, fontWeight: 500, letterSpacing: '-0.01em' }}>{e.degree}</h3>
                <div style={{ fontSize: 13, color: blue, marginTop: 4 }}>{e.school}</div>
              </div>
              <div style={{ gridColumn: 'span 6', fontSize: 13, color: dim, lineHeight: 1.55, textWrap: 'pretty' }}>{e.detail}</div>
            </div>
          ))}
        </section>

        {/* PUBLICATIONS */}
        <section style={{ marginBottom: 72 }}>
          <SectionHeader num="05" title="Publications" count={d.publications.length} />
          <table style={{ width: '100%', borderCollapse: 'collapse', ...S.mono, fontSize: 12 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', padding: '10px 0', borderBottom: `1px solid ${grid}`, ...S.tick, width: 40 }}>#</th>
                <th style={{ textAlign: 'left', padding: '10px 0', borderBottom: `1px solid ${grid}`, ...S.tick }}>Title</th>
                <th style={{ textAlign: 'left', padding: '10px 0', borderBottom: `1px solid ${grid}`, ...S.tick, width: 200 }}>Venue</th>
                <th style={{ textAlign: 'right', padding: '10px 0', borderBottom: `1px solid ${grid}`, ...S.tick, width: 60 }}>Year</th>
              </tr>
            </thead>
            <tbody>
              {d.publications.map((p, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${grid}` }}>
                  <td style={{ padding: '14px 0', color: blue, verticalAlign: 'top' }}>{String(i + 1).padStart(2, '0')}</td>
                  <td style={{ padding: '14px 12px 14px 0', fontFamily: '"Space Grotesk", sans-serif', fontSize: 14, color: fg, lineHeight: 1.4, textWrap: 'pretty' }}>
                    {p.firstAuthor && <span style={{ color: blue }}>★ </span>}
                    {p.title}
                  </td>
                  <td style={{ padding: '14px 0', color: dim, verticalAlign: 'top' }}>{p.venue}</td>
                  <td style={{ padding: '14px 0', color: blue, textAlign: 'right', verticalAlign: 'top' }}>{p.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* PATENTS + AWARDS */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          <div>
            <SectionHeader num="06" title="Patents" count={d.patents.length} />
            {d.patents.map((p, i) => (
              <div key={i} style={{ padding: '18px 0', borderBottom: `1px solid ${grid}` }}>
                <div style={{ fontSize: 15, color: fg, lineHeight: 1.4, textWrap: 'pretty' }}>{p.title}</div>
                <div style={{ ...S.mono, fontSize: 11, color: blue, marginTop: 8 }}>{p.id}</div>
              </div>
            ))}
          </div>
          <div>
            <SectionHeader num="07" title="Awards" count={d.awards.length} />
            {d.awards.map((a, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: `1px solid ${grid}`, display: 'grid', gridTemplateColumns: '80px 1fr', gap: 12, alignItems: 'baseline' }}>
                <span style={{ ...S.mono, fontSize: 10, color: blue }}>{a.year}</span>
                <div>
                  <span style={{ fontSize: 12, color: fg }}>{a.title}</span>
                  <div style={{ ...S.mono, fontSize: 10, color: dim, marginTop: 2 }}>{a.org}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer style={{ borderTop: `1px solid ${grid}`, padding: '48px 64px', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 16 }}>
        <div style={{ gridColumn: 'span 6' }}>
          <div style={S.tick}>Contact</div>
          <div style={{ fontSize: 40, color: fg, marginTop: 12, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Open to conversations on <span style={{ color: blue }}>enterprise GenAI</span>,<br />architecture decisions, and production reality.
          </div>
        </div>
        <div style={{ gridColumn: 'span 6', display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <a href={`mailto:${d.email}`} style={{ ...S.mono, fontSize: 13, color: bg, background: blue, padding: '12px 20px', borderRadius: 2, textDecoration: 'none', letterSpacing: '0.04em' }}>
            {d.email}
          </a>
          <a href={`https://${d.linkedin}`} style={{ ...S.mono, fontSize: 13, color: blue, border: `1px solid ${blue}`, padding: '12px 20px', borderRadius: 2, textDecoration: 'none', letterSpacing: '0.04em' }}>
            {d.linkedin}
          </a>
        </div>
        <div style={{ gridColumn: 'span 12', marginTop: 48, display: 'flex', justifyContent: 'space-between', ...S.mono, fontSize: 10, color: dim, letterSpacing: '0.15em', borderTop: `1px solid ${grid}`, paddingTop: 20 }}>
          <span>© CODY CHAMPION / MMXXVI</span>
          <span>SET IN SPACE GROTESK & IBM PLEX MONO</span>
          <span>END §</span>
        </div>
      </footer>
    </div>
  );
};

window.SignalCV = SignalCV;
