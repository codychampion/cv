// variant-quiet-weight.jsx — Editorial bold aesthetic
// Warm black, amber accent, Instrument Serif display + Manrope body

const ReadingShelf = ({ amber, S }) => {
  const [papers, setPapers] = React.useState(null);
  const [err, setErr] = React.useState(false);

  React.useEffect(() => {
    // arXiv Atom feed for cs.AI, newest first
    const url = 'https://export.arxiv.org/api/query?search_query=cat:cs.AI&sortBy=submittedDate&sortOrder=descending&max_results=2';
    fetch(url)
      .then(r => r.text())
      .then(xml => {
        const doc = new DOMParser().parseFromString(xml, 'text/xml');
        const entries = [...doc.getElementsByTagName('entry')].slice(0, 2).map(e => {
          const title = e.getElementsByTagName('title')[0]?.textContent?.trim().replace(/\s+/g, ' ') || '';
          const summary = e.getElementsByTagName('summary')[0]?.textContent?.trim().replace(/\s+/g, ' ').slice(0, 260) || '';
          const authors = [...e.getElementsByTagName('author')].map(a => a.getElementsByTagName('name')[0]?.textContent || '').slice(0, 3);
          const link = [...e.getElementsByTagName('link')].find(l => l.getAttribute('rel') === 'alternate')?.getAttribute('href') || '#';
          const published = e.getElementsByTagName('published')[0]?.textContent?.slice(0, 10) || '';
          return { title, summary, authors, link, published };
        });
        setPapers(entries);
      })
      .catch(() => setErr(true));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
      {(papers || [0, 1]).map((p, i) => (
        <a key={i} href={p?.link || '#'} target="_blank" rel="noopener" style={{
          display: 'block', padding: '24px 28px', border: '1px solid rgba(232,164,76,0.22)',
          background: 'rgba(232,164,76,0.03)', textDecoration: 'none', transition: 'border-color 0.15s, background 0.15s',
        }}
        onMouseOver={e => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.background = 'rgba(232,164,76,0.06)'; }}
        onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(232,164,76,0.22)'; e.currentTarget.style.background = 'rgba(232,164,76,0.03)'; }}>
          <div style={{ ...S.mono, fontSize: 10, color: amber, letterSpacing: '0.1em' }}>
            ARXIV · CS.AI{p?.published && ` · ${p.published}`}
          </div>
          <div style={{ ...S.serif, fontSize: 22, color: '#faf5eb', lineHeight: 1.25, letterSpacing: '-0.01em', marginTop: 12, textWrap: 'pretty' }}>
            {p?.title || (err ? 'arXiv feed unavailable' : 'Loading latest cs.AI paper…')}
          </div>
          {p?.authors?.length > 0 && (
            <div style={{ ...S.serif, fontStyle: 'italic', fontSize: 14, color: '#b8afa0', marginTop: 8 }}>
              {p.authors.join(', ')}{p.authors.length === 3 ? ' et al.' : ''}
            </div>
          )}
          <div style={{ fontSize: 13, color: '#c4bba9', marginTop: 14, lineHeight: 1.5, textWrap: 'pretty' }}>
            {p?.summary ? p.summary + '…' : '\u00A0'}
          </div>
          <div style={{ ...S.mono, fontSize: 11, color: amber, marginTop: 16, letterSpacing: '0.04em' }}>READ ON ARXIV ↗</div>
        </a>
      ))}
    </div>
  );
};

const QuietWeightCV = () => {
  const d = window.CV_DATA;
  const amber = '#e8a44c';
  const warmBlack = '#0f0d0a';
  const paper = '#f5ede0';

  const S = {
    root: {
      background: warmBlack,
      color: '#e8e1d5',
      fontFamily: '"Manrope", system-ui, sans-serif',
      fontSize: 15,
      lineHeight: 1.55,
      position: 'relative',
    },
    serif: { fontFamily: '"Instrument Serif", "Cormorant Garamond", Georgia, serif', fontWeight: 400 },
    mono: { fontFamily: '"JetBrains Mono", ui-monospace, monospace' },
    eyebrow: {
      fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
      color: amber, fontWeight: 500,
    },
  };

  const Num = ({ n }) => (
    <span style={{ ...S.serif, fontStyle: 'italic', fontSize: 22, color: amber, marginRight: 14 }}>
      {n}
    </span>
  );

  // Section manifest — drives the nav + gets attached as section IDs
  const sections = [
    { n: '01', id: 'outcomes', label: 'Outcomes' },
    { n: '02', id: 'about', label: 'About' },
    { n: '03', id: 'work', label: 'Work' },
    { n: '04', id: 'domain', label: 'Domain Expertise' },
    { n: '05', id: 'trajectory', label: 'Trajectory' },
    { n: '06', id: 'capabilities', label: 'Capability Map' },
    { n: '07', id: 'leadership', label: 'Leadership' },
    { n: '08', id: 'education', label: 'Education' },
    { n: '09', id: 'projects', label: 'Projects' },
    { n: '10', id: 'publications', label: 'Publications' },
    { n: '11', id: 'speaking', label: 'Speaking' },
    { n: '12', id: 'patents', label: 'Patents' },
    { n: '13', id: 'awards', label: 'Awards' },
    { n: '14', id: 'reading', label: 'Reading Now' },
    { n: '·',  id: 'contact', label: 'Contact' },
  ];

  return (
    <div style={S.root}>
      {/* HERO with headshot */}
      <section style={{ padding: '72px 72px 60px', borderBottom: `1px solid rgba(232,164,76,0.22)`, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 56 }}>
          <div>
            <div style={S.eyebrow}>CV · 2026</div>
            <div style={{ ...S.mono, fontSize: 11, color: '#8a8275', marginTop: 8 }}>DUBLIN, IRELAND</div>
            <a href={`https://${d.site}`} style={{ ...S.mono, fontSize: 11, color: amber, marginTop: 4, display: 'inline-block', textDecoration: 'none', letterSpacing: '0.04em' }}>
              {d.site.toUpperCase()} ↗
            </a>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href={`mailto:${d.email}`} style={{ ...S.mono, fontSize: 12, color: amber, textDecoration: 'none', display: 'block' }}>
              {d.email}
            </a>
            <a href={`https://${d.github}`} style={{ ...S.mono, fontSize: 12, color: amber, textDecoration: 'none', display: 'block', marginTop: 2 }}>
              {d.github}
            </a>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 48, alignItems: 'end' }}>
          <h1 style={{
            ...S.serif,
            fontSize: 200, lineHeight: 0.88, letterSpacing: '-0.045em',
            color: '#faf5eb', margin: 0,
          }}>
            Cody<br/>
            <span style={{ fontStyle: 'italic', color: amber }}>Champion</span>.
          </h1>
          <div style={{ aspectRatio: '1/1', overflow: 'hidden', border: `1px solid rgba(232,164,76,0.3)`, position: 'relative', background: '#1a1610' }}>
            <img src={d.photo} alt="Cody Champion" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.9)' }} />
            <div style={{ position: 'absolute', top: 10, left: 10, ...S.mono, fontSize: 9, color: amber, letterSpacing: '0.15em', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>FIG.00 — CC</div>
          </div>
        </div>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 64, alignItems: 'start' }}>
          <div>
            <div style={S.eyebrow}>Currently</div>
            <div style={{ ...S.serif, fontSize: 28, color: '#faf5eb', lineHeight: 1.2, marginTop: 12 }}>
              AI Technical Lead<br/>
              at <em style={{ color: amber }}>Accenture</em>
            </div>
            <div style={{ ...S.mono, fontSize: 11, color: '#8a8275', marginTop: 14, letterSpacing: '0.06em' }}>
              PhD · DUBLIN · 2025—
            </div>
          </div>
          <p style={{ fontSize: 22, color: '#e8e1d5', lineHeight: 1.4, margin: 0, maxWidth: 680, textWrap: 'pretty' }}>
            I build enterprise GenAI where the rules are hardest and the stakes are highest.
            I've <em style={{ ...S.serif, color: amber }}>written the governance playbook</em> and <em style={{ ...S.serif, color: amber }}>shipped the production code</em> —
            from drone ML, to advising NSF's Chief AI Officer, to enterprise GenAI delivery at Accenture.
            If I can get AI into production where the WiFi doesn't exist, I can get it into production anywhere.
          </p>
        </div>
      </section>

      {/* FEATURED CALLOUT — Claude Certified Architect */}
      <section style={{ padding: '56px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)', background: 'linear-gradient(180deg, rgba(232,164,76,0.06), transparent)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr auto', gap: 48, alignItems: 'center' }}>
          <div style={{ ...S.mono, fontSize: 11, color: amber, letterSpacing: '0.12em' }}>★ FEATURED<br /><span style={{ color: '#8a8275', letterSpacing: '0.06em' }}>{d.featured.eyebrow}</span></div>
          <div>
            <h3 style={{ ...S.serif, fontSize: 36, color: '#faf5eb', margin: 0, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {d.featured.title}
            </h3>
            <p style={{ fontSize: 15, color: '#c4bba9', margin: '10px 0 0', maxWidth: 780, lineHeight: 1.55, textWrap: 'pretty' }}>{d.featured.body}</p>
          </div>
          <div style={{ ...S.mono, fontSize: 11, color: amber, border: `1px solid ${amber}`, padding: '18px 22px', borderRadius: 2, letterSpacing: '0.1em', textAlign: 'center', lineHeight: 1.4 }}>
            {d.featured.badge}
          </div>
        </div>
      </section>

      {/* INDEX — section navigation */}
      <section style={{ padding: '48px 72px', borderBottom: `1px solid rgba(232,164,76,0.18)`, background: 'rgba(232,164,76,0.025)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 28 }}>
          <div style={S.eyebrow}>Index</div>
          <div style={{ ...S.mono, fontSize: 11, color: '#8a8275', letterSpacing: '0.08em' }}>{sections.length} SECTIONS</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '14px 32px' }}>
          {sections.map((s, i) => (
            <a key={i} href={`#sec-${s.id}`} style={{
              display: 'flex', alignItems: 'baseline', gap: 12,
              textDecoration: 'none', padding: '6px 0',
              borderBottom: '1px dashed rgba(232,164,76,0.18)',
              transition: 'border-color 0.15s',
            }}
              onMouseOver={e => e.currentTarget.style.borderBottomColor = amber}
              onMouseOut={e => e.currentTarget.style.borderBottomColor = 'rgba(232,164,76,0.18)'}>
              <span style={{ ...S.serif, fontStyle: 'italic', fontSize: 14, color: amber, minWidth: 20 }}>{s.n}</span>
              <span style={{ ...S.serif, fontSize: 17, color: '#faf5eb', letterSpacing: '-0.005em' }}>{s.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* OUTCOMES — large pulled quotes */}
      <section id="sec-outcomes" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 48 }}>
          <Num n="01" />
          <div style={S.eyebrow}>Selected Outcomes</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}>
          {d.outcomes.map((o, i) => (
            <div key={i}>
              <div style={{ ...S.serif, fontSize: 84, color: amber, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
                {o.metric}
              </div>
              <div style={{ fontSize: 14, color: '#b8afa0', marginTop: 14, lineHeight: 1.5, textWrap: 'pretty' }}>
                {o.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="sec-about" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 40 }}>
          <Num n="02" />
          <div style={S.eyebrow}>About</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64 }}>
          <div style={{ ...S.serif, fontSize: 36, color: '#faf5eb', lineHeight: 1.15, letterSpacing: '-0.02em' }}>
            I build and lead AI systems from first whiteboard through production — and <em style={{ color: amber }}>I stay until they're working at scale</em>.
          </div>
          <div>
            <p style={{ fontSize: 16, color: '#d4cbba', lineHeight: 1.6, margin: 0, textWrap: 'pretty' }}>
              {d.narrative}
            </p>
            <div style={{ marginTop: 36 }}>
              <div style={S.eyebrow}>Current focus</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0' }}>
                {d.focus.map((f, i) => (
                  <li key={i} style={{ ...S.serif, fontSize: 22, color: '#e8e1d5', padding: '12px 0', borderTop: i === 0 ? '1px solid rgba(232,164,76,0.2)' : 'none', borderBottom: '1px solid rgba(232,164,76,0.12)', display: 'flex', gap: 18 }}>
                    <span style={{ color: amber, fontStyle: 'italic' }}>{String(i + 1).padStart(2, '0')}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="sec-work" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 48 }}>
          <Num n="03" />
          <div style={S.eyebrow}>Work</div>
        </div>
        {d.experience.map((e, i) => (
          <article key={i} style={{ padding: '40px 0', borderTop: '1px solid rgba(232,164,76,0.18)', display: 'grid', gridTemplateColumns: '200px 1fr 2fr', gap: 48, alignItems: 'start' }}>
            <div>
              <div style={{ ...S.mono, fontSize: 11, color: amber, letterSpacing: '0.08em' }}>{e.period}</div>
              <div style={{ ...S.mono, fontSize: 10, color: '#8a8275', marginTop: 6 }}>{e.location}</div>
            </div>
            <div>
              <div style={S.eyebrow}>{e.company}</div>
              <h3 style={{ ...S.serif, fontSize: 38, color: '#faf5eb', margin: '8px 0 2px', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                {e.role}
              </h3>
              <div style={{ ...S.serif, fontSize: 18, fontStyle: 'italic', color: amber, marginTop: 4 }}>{e.sub}</div>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {e.bullets.map((b, j) => (
                <li key={j} style={{ fontSize: 14, color: '#c4bba9', padding: '8px 0', lineHeight: 1.55, display: 'flex', gap: 12 }}>
                  <span style={{ color: amber, marginTop: 2 }}>—</span>
                  <span style={{ textWrap: 'pretty' }}>{b}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* DOMAIN EXPERTISE INFOGRAPHICS — 04, 05, 06 */}
      <ExpertiseInfographics data={d.expertise} amber={amber} S={S} Num={Num} />

      {/* LEADERSHIP & MENTORSHIP */}
      <section id="sec-leadership" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 48 }}>
          <Num n="07" />
          <div style={S.eyebrow}>Leadership & Mentorship</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          {/* Teams led */}
          <div>
            <div style={{ ...S.mono, fontSize: 11, color: amber, letterSpacing: '0.1em', marginBottom: 16 }}>TEAMS LED</div>
            {d.leadership.teams.map((t, i) => (
              <div key={i} style={{ padding: '20px 0', borderTop: '1px solid rgba(232,164,76,0.18)', display: 'grid', gridTemplateColumns: '120px 1fr', gap: 20, alignItems: 'baseline' }}>
                <div style={{ ...S.serif, fontSize: 48, color: amber, lineHeight: 1, letterSpacing: '-0.02em' }}>{t.size}</div>
                <div>
                  <div style={{ ...S.serif, fontSize: 18, color: '#faf5eb', lineHeight: 1.3 }}>{t.label}</div>
                  <div style={{ ...S.mono, fontSize: 11, color: '#8a8275', marginTop: 6, letterSpacing: '0.04em' }}>{t.context}</div>
                </div>
              </div>
            ))}
            <div style={{ ...S.mono, fontSize: 11, color: amber, letterSpacing: '0.1em', margin: '40px 0 16px' }}>COMMUNITIES</div>
            {d.leadership.communities.map((c, i) => (
              <div key={i} style={{ padding: '18px 0', borderTop: '1px solid rgba(232,164,76,0.18)' }}>
                <div style={{ ...S.serif, fontSize: 20, color: '#faf5eb', lineHeight: 1.25 }}>
                  <em style={{ color: amber, fontStyle: 'italic' }}>{c.role}</em> — {c.org}
                </div>
                <div style={{ fontSize: 14, color: '#b8afa0', marginTop: 6, lineHeight: 1.5 }}>{c.note}</div>
              </div>
            ))}
          </div>
          {/* Mentorship */}
          <div>
            <div style={{ ...S.mono, fontSize: 11, color: amber, letterSpacing: '0.1em', marginBottom: 16 }}>STUDENTS & INTERNS MENTORED</div>
            {d.leadership.mentorship.map((m, i) => (
              <div key={i} style={{ padding: '22px 0', borderTop: '1px solid rgba(232,164,76,0.18)', display: 'flex', gap: 20, alignItems: 'baseline' }}>
                <span style={{ ...S.serif, fontStyle: 'italic', fontSize: 22, color: amber }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ ...S.serif, fontSize: 20, color: '#faf5eb', lineHeight: 1.3 }}>{m.role}</div>
                  <div style={{ ...S.mono, fontSize: 11, color: '#8a8275', marginTop: 6, letterSpacing: '0.05em' }}>{m.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS (removed — replaced by Capability Map infographic) */}
      {false && (
      <section style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 48 }}>
          <Num n="05" />
          <div style={S.eyebrow}>Capabilities</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px 56px' }}>
          {d.skills.map((s, i) => (
            <div key={i} style={{ borderTop: '1px solid rgba(232,164,76,0.18)', paddingTop: 18 }}>
              <div style={{ ...S.serif, fontSize: 22, fontStyle: 'italic', color: amber, marginBottom: 10 }}>{s.group}</div>
              <div style={{ fontSize: 14, color: '#d4cbba', lineHeight: 1.7 }}>
                {s.items.join(' · ')}
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* EDUCATION */}
      <section id="sec-education" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 48 }}>
          <Num n="08" />
          <div style={S.eyebrow}>Education</div>
        </div>
        {d.education.map((e, i) => (
          <div key={i} style={{ padding: '28px 0', borderTop: '1px solid rgba(232,164,76,0.18)', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }}>
            <div style={{ ...S.mono, fontSize: 11, color: amber, letterSpacing: '0.08em' }}>{e.period}</div>
            <div>
              <h3 style={{ ...S.serif, fontSize: 32, color: '#faf5eb', margin: 0, letterSpacing: '-0.01em' }}>{e.degree}</h3>
              <div style={{ ...S.serif, fontStyle: 'italic', fontSize: 18, color: amber, marginTop: 4 }}>{e.school}</div>
              <p style={{ fontSize: 14, color: '#b8afa0', marginTop: 14, maxWidth: 720, lineHeight: 1.55, textWrap: 'pretty' }}>{e.detail}</p>
            </div>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="sec-projects" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 48 }}>
          <Num n="09" />
          <div style={S.eyebrow}>Selected Projects</div>
        </div>
        {d.projects.map((p, i) => (
          <article key={p.id} style={{ padding: '32px 0 8px', borderTop: '1px solid rgba(232,164,76,0.18)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 2fr', gap: 48, alignItems: 'start' }}>
              <div>
                <div style={{ ...S.mono, fontSize: 11, color: amber, letterSpacing: '0.08em' }}>{p.year}</div>
                <div style={{ ...S.serif, fontStyle: 'italic', fontSize: 15, color: '#b8afa0', marginTop: 10, lineHeight: 1.35 }}>{p.award}</div>
              </div>
              <div>
                <div style={S.eyebrow}>Case Study</div>
                <h3 style={{ ...S.serif, fontSize: 38, color: '#faf5eb', margin: '8px 0 2px', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                  {p.title}
                </h3>
                <div style={{ ...S.serif, fontSize: 18, fontStyle: 'italic', color: amber, marginTop: 4 }}>{p.role}</div>
              </div>
              <div>
                <p style={{ fontSize: 15, color: '#d4cbba', margin: 0, lineHeight: 1.55, textWrap: 'pretty' }}>{p.summary}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0' }}>
                  {p.details.map((b, j) => (
                    <li key={j} style={{ fontSize: 14, color: '#c4bba9', padding: '6px 0', lineHeight: 1.55, display: 'flex', gap: 12 }}>
                      <span style={{ color: amber, marginTop: 2 }}>—</span>
                      <span style={{ textWrap: 'pretty' }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 22, display: 'flex', flexWrap: 'wrap', gap: '6px 8px' }}>
                  {p.stack.map((s, j) => (
                    <span key={j} style={{ ...S.mono, fontSize: 11, color: amber, border: '1px solid rgba(232,164,76,0.3)', padding: '4px 10px', borderRadius: 2, letterSpacing: '0.03em' }}>{s}</span>
                  ))}
                </div>
                <div style={{ marginTop: 20, display: 'flex', flexWrap: 'wrap', gap: 18 }}>
                  {p.links.map((l, j) => (
                    <a key={j} href={l.href} target="_blank" rel="noopener" style={{ ...S.mono, fontSize: 12, color: amber, textDecoration: 'none', letterSpacing: '0.05em', borderBottom: '1px dashed rgba(232,164,76,0.5)', paddingBottom: 2 }}>
                      {l.label.toUpperCase()} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

          {/* Image strip — only render if project has images */}
          {p.images && p.images.length > 0 && (
            <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: `repeat(${Math.min(p.images.length, 4)}, 1fr)`, gap: 16 }}>
              {p.images.map((img, j) => (
                <figure key={j} style={{ margin: 0 }}>
                  <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#1a1610', border: '1px solid rgba(232,164,76,0.2)' }}>
                    <img src={img.src} alt={img.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
                  </div>
                  <figcaption style={{ ...S.mono, fontSize: 10, color: '#8a8275', marginTop: 10, letterSpacing: '0.04em', lineHeight: 1.45 }}>
                    <span style={{ color: amber }}>FIG.{String(j + 1).padStart(2, '0')}</span> — {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
          </article>
        ))}
      </section>

      {/* PUBLICATIONS */}
      <section id="sec-publications" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 48 }}>
          <Num n="10" />
          <div style={S.eyebrow}>Selected Publications</div>
        </div>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {d.publications.map((p, i) => (
            <li key={i} style={{ padding: '22px 0', borderTop: '1px solid rgba(232,164,76,0.15)', display: 'grid', gridTemplateColumns: '60px 1fr 100px', gap: 24, alignItems: 'baseline' }}>
              <span style={{ ...S.serif, fontStyle: 'italic', fontSize: 22, color: amber }}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <a href={p.href} target="_blank" rel="noopener" style={{ ...S.serif, fontSize: 20, color: '#faf5eb', lineHeight: 1.3, letterSpacing: '-0.005em', textDecoration: 'none', display: 'block', borderBottom: '1px dashed transparent', transition: 'border-color 0.15s' }}
                   onMouseOver={e => e.currentTarget.style.borderColor = amber}
                   onMouseOut={e => e.currentTarget.style.borderColor = 'transparent'}>
                  {p.firstAuthor && <span style={{ color: amber }}>★ </span>}
                  {p.title} <span style={{ color: amber, fontSize: 14 }}>↗</span>
                </a>
                <div style={{ ...S.mono, fontSize: 11, color: '#8a8275', marginTop: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{p.venue}</div>
              </div>
              <span style={{ ...S.mono, fontSize: 12, color: amber, textAlign: 'right' }}>{p.year}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* SPEAKING & THOUGHT LEADERSHIP */}
      <section id="sec-speaking" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 48 }}>
          <Num n="11" />
          <div style={S.eyebrow}>Speaking & Thought Leadership</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 48px' }}>
          {d.speaking.map((s, i) => {
            const Tag = s.href ? 'a' : 'div';
            const props = s.href ? { href: s.href, target: '_blank', rel: 'noopener' } : {};
            return (
              <Tag key={i} {...props} style={{
                padding: '22px 0', borderTop: '1px solid rgba(232,164,76,0.18)',
                display: 'block', textDecoration: 'none',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
                  <span style={{ ...S.mono, fontSize: 10, color: amber, letterSpacing: '0.12em' }}>{s.type.toUpperCase()}</span>
                  <span style={{ ...S.mono, fontSize: 11, color: amber }}>{s.year}</span>
                </div>
                <div style={{ ...S.serif, fontSize: 19, color: '#faf5eb', lineHeight: 1.3, letterSpacing: '-0.005em', textWrap: 'pretty' }}>
                  {s.title}{s.href && <span style={{ color: amber, fontSize: 13 }}> ↗</span>}
                </div>
                <div style={{ ...S.serif, fontStyle: 'italic', fontSize: 14, color: '#b8afa0', marginTop: 6 }}>{s.venue}</div>
              </Tag>
            );
          })}
        </div>
      </section>

      {/* PATENTS + AWARDS side-by-side */}
      <section id="sec-patents" style={{ padding: '80px 72px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 32 }}>
            <Num n="12" />
            <div style={S.eyebrow}>Patents</div>
          </div>
          {d.patents.map((p, i) => (
            <div key={i} style={{ padding: '20px 0', borderTop: '1px solid rgba(232,164,76,0.18)' }}>
              <a href={p.href} target="_blank" rel="noopener" style={{ ...S.serif, fontSize: 18, color: '#faf5eb', lineHeight: 1.35, letterSpacing: '-0.005em', textDecoration: 'none', display: 'block' }}>
                {p.title} <span style={{ color: amber, fontSize: 13 }}>↗</span>
              </a>
              <div style={{ ...S.mono, fontSize: 11, color: amber, marginTop: 6 }}>{p.id}</div>
            </div>
          ))}
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 32 }}>
            <Num n="13" />
            <div style={S.eyebrow}>Awards & Certifications</div>
          </div>
          {d.awards.map((a, i) => (
            <div key={i} style={{ padding: '12px 0', borderTop: '1px solid rgba(232,164,76,0.12)', display: 'grid', gridTemplateColumns: '80px 1fr', gap: 14, alignItems: 'baseline' }}>
              <span style={{ ...S.mono, fontSize: 11, color: amber }}>{a.year}</span>
              <div>
                <span style={{ fontSize: 13, color: '#e8e1d5' }}>{a.title}</span>
                <div style={{ fontSize: 11, color: '#8a8275', marginTop: 2 }}>{a.org}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* READING NOW — live arXiv feed */}
      <section id="sec-reading" style={{ padding: '80px 72px', borderBottom: '1px solid rgba(232,164,76,0.14)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', marginBottom: 12 }}>
          <Num n="14" />
          <div style={S.eyebrow}>Reading Now</div>
        </div>
        <p style={{ fontSize: 15, color: '#b8afa0', margin: '0 0 36px 72px', fontStyle: 'italic', lineHeight: 1.5, maxWidth: 640 }}>
          Live feed — latest <em style={{ color: amber }}>cs.AI</em> papers on arXiv. What I’m keeping an eye on.
        </p>
        <div style={{ marginLeft: 72 }}>
          <ReadingShelf amber={amber} S={S} />
        </div>
      </section>

      {/* CONTACT */}
      <section id="sec-contact" style={{ padding: '96px 72px 72px', textAlign: 'center' }}>
        <div style={{ ...S.serif, fontSize: 64, color: '#faf5eb', lineHeight: 1, letterSpacing: '-0.03em' }}>
          Let's <em style={{ color: amber }}>talk</em>.
        </div>
        <div style={{ marginTop: 32, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`mailto:${d.email}`} style={{ ...S.mono, fontSize: 13, color: warmBlack, background: amber, padding: '14px 24px', borderRadius: 2, textDecoration: 'none', letterSpacing: '0.05em' }}>
            {d.email.toUpperCase()}
          </a>
          <a href={`https://${d.github}`} style={{ ...S.mono, fontSize: 13, color: amber, border: `1px solid ${amber}`, padding: '14px 24px', borderRadius: 2, textDecoration: 'none', letterSpacing: '0.05em' }}>
            GITHUB ↗
          </a>
          <a href={`https://${d.linkedin}`} style={{ ...S.mono, fontSize: 13, color: amber, border: `1px solid ${amber}`, padding: '14px 24px', borderRadius: 2, textDecoration: 'none', letterSpacing: '0.05em' }}>
            LINKEDIN ↗
          </a>
        </div>
        <div style={{ ...S.mono, fontSize: 10, color: '#6a6456', marginTop: 56, letterSpacing: '0.15em' }}>
          SET IN INSTRUMENT SERIF & MANROPE · DUBLIN · MMXXVI
        </div>
      </section>
    </div>
  );
};

window.QuietWeightCV = QuietWeightCV;
