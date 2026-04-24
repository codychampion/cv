// CLASSICAL CV — 2-page printable, neutral, HR-ready
// US Letter page ratio (8.5 × 11), modest accent, no decoration.

const ClassicalCV = () => {
  const d = window.CV_DATA;

  // Palette — near-black on cream, one hairline accent
  const ink = '#1a1a1a';
  const muted = '#555';
  const faint = '#888';
  const rule = '#c8c3b8';
  const paper = '#fafaf7';

  const pageStyle = {
    width: 816,
    minHeight: 1056,
    background: paper,
    color: ink,
    fontFamily: '"Source Serif 4", "Source Serif Pro", "Charter", Georgia, serif',
    fontSize: 10.5,
    lineHeight: 1.4,
    padding: '64px 72px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)',
    position: 'relative',
  };

  const sectionHeader = {
    fontFamily: '"Inter", "Source Sans 3", system-ui, sans-serif',
    fontSize: 9,
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: ink,
    marginTop: 18,
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: `0.5px solid ${ink}`,
  };

  const sans = { fontFamily: '"Inter", "Source Sans 3", system-ui, sans-serif' };

  // ——— Header block ———————————————
  const Header = () => (
    <header style={{ borderBottom: `1.5px solid ${ink}`, paddingBottom: 14, marginBottom: 18 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <h1 style={{
            margin: 0, fontSize: 30, fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1,
            fontFamily: '"Source Serif 4", "Source Serif Pro", "Charter", Georgia, serif',
          }}>
            {d.name}
          </h1>
          <div style={{
            ...sans, fontSize: 11, color: muted, marginTop: 6, letterSpacing: '0.01em',
          }}>
            {d.role} &nbsp;·&nbsp; {d.location}
          </div>
        </div>
        <div style={{ ...sans, fontSize: 9.5, color: muted, textAlign: 'right', lineHeight: 1.55 }}>
          <div>{d.email}</div>
          <div>{d.site}</div>
          <div>{d.github}</div>
        </div>
      </div>
    </header>
  );

  // ——— Summary ———————————————
  const Summary = () => (
    <section>
      <div style={sectionHeader}>Summary</div>
      <p style={{ margin: 0, textWrap: 'pretty' }}>
        Technology and AI leader with experience spanning enterprise AI strategy, production GenAI delivery,
        applied machine learning, computer vision, and AI governance across digital platforms, telecommunications,
        public-sector, defense, and scientific research environments. Track record of leading cross-functional
        teams, advising senior executives, designing secure and scalable AI architectures, and delivering hands-on
        technical solutions in mission-critical and regulated settings.
      </p>
    </section>
  );

  // ——— Experience ———————————————
  const Experience = () => (
    <section>
      <div style={sectionHeader}>Experience</div>
      {d.experience.map((job, i) => (
        <div key={i} style={{ marginBottom: i === d.experience.length - 1 ? 0 : 14 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 2 }}>
            <div>
              <span style={{ fontWeight: 600 }}>{job.role}</span>
              <span style={{ color: muted }}>, {job.company}</span>
              {job.sub && <span style={{ ...sans, fontSize: 9.5, color: faint, marginLeft: 6 }}>· {job.sub}</span>}
            </div>
            <div style={{ ...sans, fontSize: 9.5, color: muted, letterSpacing: '0.01em', flexShrink: 0 }}>
              {job.period} &nbsp;·&nbsp; {job.location}
            </div>
          </div>
          <ul style={{ margin: '4px 0 0', paddingLeft: 16, color: ink }}>
            {job.bullets.slice(0, job.maxBullets || 5).map((b, j) => (
              <li key={j} style={{ marginBottom: 2, textWrap: 'pretty' }}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );

  // ——— Education ———————————————
  const Education = () => (
    <section>
      <div style={sectionHeader}>Education</div>
      {d.education.map((ed, i) => (
        <div key={i} style={{ marginBottom: i === d.education.length - 1 ? 0 : 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <span style={{ fontWeight: 600 }}>{ed.degree}</span>
              <span style={{ color: muted }}>, {ed.school}</span>
            </div>
            <div style={{ ...sans, fontSize: 9.5, color: muted }}>{ed.period}</div>
          </div>
          <div style={{ marginTop: 2, color: ink, textWrap: 'pretty' }}>{ed.detail}</div>
        </div>
      ))}
    </section>
  );

  // ——— Publications ———————————————
  const Publications = () => (
    <section>
      <div style={sectionHeader}>Selected Publications</div>
      <div style={{ ...sans, fontSize: 9, color: faint, marginBottom: 6, letterSpacing: '0.02em' }}>
        * denotes first author
      </div>
      {d.publications.map((p, i) => (
        <div key={i} style={{ marginBottom: 5, textWrap: 'pretty', textIndent: '-16px', paddingLeft: 16 }}>
          <span style={{ color: faint }}>{p.year} &nbsp;·&nbsp; </span>
          <span style={{ fontStyle: 'italic' }}>{p.title}</span>
          {p.firstAuthor && <span style={{ color: ink }}>*</span>}
          <span style={{ color: muted }}>. {p.venue}.</span>
          {p.href && (
            <a href={p.href} target="_blank" rel="noopener" style={{ color: muted, marginLeft: 4, textDecoration: 'none' }}>↗</a>
          )}
        </div>
      ))}
    </section>
  );

  // ——— Patents ———————————————
  const Patents = () => (
    <section>
      <div style={sectionHeader}>Patents</div>
      {d.patents.map((p, i) => (
        <div key={i} style={{ marginBottom: 3, textWrap: 'pretty' }}>
          <span style={{ fontStyle: 'italic' }}>{p.title}</span>
          <span style={{ color: muted }}> — {p.id}.</span>
        </div>
      ))}
    </section>
  );

  // ——— Awards ———————————————
  const Awards = () => (
    <section>
      <div style={sectionHeader}>Awards & Certifications</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 24px' }}>
        {d.awards.map((a, i) => (
          <div key={i} style={{ display: 'flex', gap: 8, textWrap: 'pretty' }}>
            <span style={{ ...sans, fontSize: 9.5, color: faint, minWidth: 52, flexShrink: 0 }}>{a.year}</span>
            <span>
              {a.title}
              <span style={{ color: muted }}> — {a.org}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );

  // ——— Skills ———————————————
  const Skills = () => (
    <section>
      <div style={sectionHeader}>Technical Skills</div>
      {d.skills.map((s, i) => (
        <div key={i} style={{ marginBottom: 3, textWrap: 'pretty' }}>
          <span style={{ ...sans, fontWeight: 600, fontSize: 9.5 }}>{s.group}: </span>
          <span style={{ color: muted }}>{s.items.join(', ')}.</span>
        </div>
      ))}
    </section>
  );

  // Page-break footer
  const PageFooter = ({ page, total }) => (
    <div style={{
      position: 'absolute', bottom: 28, left: 72, right: 72,
      display: 'flex', justifyContent: 'space-between',
      ...sans, fontSize: 8, color: faint, letterSpacing: '0.08em', textTransform: 'uppercase',
    }}>
      <span>{d.name}</span>
      <span>{page} / {total}</span>
    </div>
  );

  return (
    <div style={{
      padding: 32,
      background: '#e8e4dc',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24,
    }}>
      {/* Page 1 */}
      <div style={pageStyle}>
        <Header />
        <Summary />
        <Experience />
        <PageFooter page={1} total={2} />
      </div>

      {/* Page 2 */}
      <div style={pageStyle}>
        <div style={{
          ...sans, fontSize: 8, color: faint, letterSpacing: '0.12em',
          textTransform: 'uppercase', marginBottom: 14, paddingBottom: 8,
          borderBottom: `0.5px solid ${rule}`,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>{d.name} — continued</span>
          <span>{d.email}</span>
        </div>
        <Education />
        <Publications />
        <Patents />
        <Awards />
        <Skills />
        <PageFooter page={2} total={2} />
      </div>
    </div>
  );
};

window.ClassicalCV = ClassicalCV;
