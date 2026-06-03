// cv-data.js — shared CV content
window.CV_DATA = {
  name: 'Cody Champion',
  tagline: 'I build production GenAI systems for regulated environments: RAG, agents, LLM evaluation, observability, security controls, and AI governance.',
  role: 'Applied AI Architect & GenAI Systems Lead · PhD · Dublin',
  current: {
    title: 'Applied AI Architect & GenAI Systems Lead',
    company: 'Accenture',
    location: 'Dublin, Ireland',
    since: '2025',
  },
  location: 'Dublin, Ireland',
  email: 'cody@bitsandbeakers.com',
  linkedin: 'linkedin.com/in/cody-champion',
  github: 'github.com/codychampion',
  site: 'codychampion.bitsandbeakers.com',
  photo: 'assets/cody-headshot-2026.jpg',

  featured: {
    eyebrow: 'Early Adopter · March 2026',
    title: 'Claude Certified Architect, Foundations',
    body: 'Passed Anthropic\u2019s proctored, scenario-based Claude architecture exam as an Early Adopter. The exam maps closely to the work I do day to day: agent design, tool orchestration, context management, evaluation, and operating Claude-based systems beyond the demo stage.',
    badge: 'ANTHROPIC · CCA-F',
  },

  summary: `Dublin-based Applied AI and GenAI systems leader. I build production GenAI for regulated environments — RAG, agents, LLM evaluation, observability, security controls, and AI governance. Currently leading GenAI architecture and delivery at Accenture Ireland. Prior: Advisor to NSF’s Chief AI Officer, federal AI delivery across DoD, DoS, and IARPA.`,

  hero: {
    lead: 'I build production GenAI systems for regulated environments: RAG, agents, LLM evaluation, observability, security controls, data architecture, and AI governance.',
    proofA: '',
    proofB: '',
    scope: 'Experience across Accenture, NSF\u2019s Chief AI Officer function, federal AI delivery, enterprise GenAI, and applied ML systems.',
    close: '',
    bestFit: 'Best fit: Staff Applied AI Architect · GenAI Deployment Lead · LLM Evaluation Lead · AI Governance Engineering Lead · Regulated AI Solutions Architect · Public Sector AI Lead',
  },

  heroStats: [
    { value: '99.6%', label: 'ML infra cost reduction' },
    { value: '$30M+', label: 'AI/ML program funding advised' },
    { value: '100+', label: 'AI governance community co-chaired' },
  ],

  // Logo strip — truthful affiliations only, grouped into three bands by `kind`:
  //   kind:'employer'   = direct employer / role held              → band "Experience"
  //   kind:'consulted'  = federal program advised / delivered for  → band "Consulted & delivered for"
  //   kind:'certifier'  = certification issuer only (NOT employer)  → band "Certified by"
  // `svg`  = clean local asset under assets/logos/, rendered as an <img> at a consistent strip
  //          height. Corporate wordmarks (Accenture, Booz Allen, Anthropic) are monochrome
  //          (fill="currentColor"); the IARPA seal is its own two-tone brand mark. All assets are
  //          committed locally — no CDN / hotlinking. Trademarks used nominatively (factual
  //          affiliation / certification). Federal seals are U.S.-Government public-domain works.
  // `mark` = clean text wordmark fallback, rendered when no `svg` is present (or if the asset
  //          fails to load). Orgs without a committed SVG keep wordmark only.
  // To give an org an official asset: commit a clean local SVG to assets/logos/ and add `svg` here.
  logos: [
    { name: 'Accenture',                       kind: 'employer',  mark: 'accenture',             svg: 'assets/logos/accenture.svg' },
    { name: 'National Science Foundation (NSF)', kind: 'employer', mark: 'NSF',              svg: 'assets/logos/nsf.svg' },
    { name: 'Booz Allen Hamilton',             kind: 'employer',  mark: 'Booz Allen Hamilton',   svg: 'assets/logos/booz-allen-hamilton.svg' },
    { name: 'ODNI · NGA',                      kind: 'employer',  mark: 'ODNI · NGA' },
    { name: 'DARPA',                           kind: 'consulted', mark: 'DARPA',               svg: 'assets/logos/darpa.svg' },
    { name: 'IARPA',                           kind: 'consulted', mark: 'IARPA',                 svg: 'assets/logos/iarpa.svg' },
    { name: 'Department of Defense (DoD)',     kind: 'consulted', mark: 'DoD',                 svg: 'assets/logos/dod.svg' },
    { name: 'U.S. Department of State (DoS)',  kind: 'consulted', mark: 'Dept. of State',  svg: 'assets/logos/dos.svg' },
    { name: 'Anthropic',                       kind: 'certifier', mark: 'Anthropic',             svg: 'assets/logos/anthropic.svg' },
  ],

  narrative: `I started in scientific machine learning: drones, remote sensing, microbiology, and messy real-world data. Later I moved into federal delivery and AI governance, including advising the National Science Foundation\u2019s Chief AI Officer. Today I lead GenAI and agentic AI work at Accenture. The through-line is practical: build the thing, understand the institution around it, and make sure the system can survive contact with users, budgets, and oversight.`,

  outcomes: [
    { metric: '99.6%', label: 'reduction in ML infrastructure cost via codebase and cloud architecture optimization' },
    { metric: '$30M+', label: 'in program funds secured through strategic AI/ML technical advising' },
    { metric: '100+', label: 'member AI Community of Practice co-chaired, enabling responsible AI governance' },
    { metric: '2', label: 'patents granted across AI-adjacent biology and synergist pharmacology research' },
  ],

  proof: [
    { label: 'NSF Governance', value: 'Greenfield AI governance, technical review, community, and vector/graph architecture inside NSF’s CAIO function', link: '/case-study-nsf-ai-governance' },
    { label: 'Cost Impact', value: '99.6% ML infrastructure cost reduction on a global geospatial platform', link: '/case-study-ml-cost' },
    { label: 'Model Readiness', value: 'Public LLM evaluation workbench for regulated enterprise AI', link: '/projects/llm-eval-workbench' },
    { label: 'Evaluation Research', value: 'PAEF contract-compliance evaluation: 193 contracts and 7,913 labeled policy checks', link: '/research/paef-contract-compliance' },
  ],


  caseStudies: [
    {
      id: 'lock-in-then-meter',
      title: 'Lock-In, Then Meter',
      subtitle: 'A build-vs-buy decision brief for AI inference after the flat-rate era',
      body: 'A decision brief and cost model on when self-hosting LLM inference actually pays. I work the break-even math against managed APIs and argue the real hedge is not owning GPUs but switchability — an OpenAI-compatible interface, interchangeable open-weight providers, and a frontier model held in reserve. Lock in the interface first; meter the spend second.',
      tags: ['AI Infrastructure', 'LLMOps', 'Cost Modeling', 'Build vs Buy', 'Decision Brief'],
      label: 'White Paper',
      cta: 'Read the brief →',
      link: '/lock-in-then-meter/',
    },
    {
      id: 'nsf-ai-governance',
      title: 'NSF AI Governance Foundations',
      subtitle: 'Greenfield AI governance inside a newly formed CAIO function',
      body: 'Designed and led the pre-strategy AI governance, technical-review, community, security, and data-architecture foundations for responsible AI adoption at NSF. Owned AI use-case intake, defined risk-classification and technical-review patterns, co-chaired a 100+ member AI Community of Practice, served as voting engineering review board member for AI systems, directed AI security table-tops, supported Microsoft Copilot rollout, set the technical architecture for a production vector/graph capability for research-impact intelligence — built to my design by the engineering team — and liaised with NASA, DOE, NAIRR, and other federal partners.',
      tags: ['AI Governance', 'Responsible AI', 'Public Sector AI', 'Technical Review', 'Vector + Graph Architecture', 'AI Security Table-Tops', 'Interagency Coordination'],
      link: '/case-study-nsf-ai-governance',
    },
    {
      id: 'ml-cost',
      title: '99.6% ML Infrastructure Cost Reduction',
      subtitle: 'Research-origin pipeline to production-grade system',
      body: 'Five compounding engineering defects generating $26,200/month in avoidable cloud spend. Rebuilt codebase and cloud architecture from scratch to $90/month. No new algorithms — production engineering discipline applied to research-origin code.',
      tags: ['ML Engineering', 'Cloud Architecture', 'Cost Optimization', 'Production ML', 'Geospatial CV'],
      link: '/case-study-ml-cost',
    },
    {
      id: 'llm-eval-workbench',
      title: 'LLM Evaluation Workbench',
      subtitle: 'Model readiness for regulated enterprise AI',
      body: 'Public evaluation harness for capability, reliability, governance behavior, groundedness, security reasoning, cost, and latency, using benign synthetic or public-domain evaluation scenarios.',
      tags: ['LLM Evaluation', 'Model Readiness', 'RAG Groundedness', 'AI Governance', 'Cost / Latency'],
      link: '/projects/llm-eval-workbench',
    },
    {
      id: 'paef-contract-compliance',
      title: 'PAEF Contract Compliance Evaluation',
      subtitle: 'Atomic evaluation research with token-level margins',
      body: 'Evaluation study comparing microagent atomic policy checks with monolithic auditing across 193 service contracts and 7,913 labeled policy checks.',
      tags: ['Contract Compliance', 'Microagents', 'Token-Level Calibration', 'AI Governance'],
      link: '/research/paef-contract-compliance',
    },
  ],

  projects: [
    {
      id: 'llm-eval-workbench',
      title: 'LLM Evaluation Workbench',
      role: 'Creator · public model-readiness harness',
      year: '2026',
      award: 'Public technical flagship · v0.1',
      summary: 'A config-driven public evaluation harness for regulated-enterprise model readiness: capability, reliability, governance behavior, groundedness, security reasoning, cost, and latency.',
      details: [
        'Public-safe regulated-readiness demo suite using benign synthetic scenarios for policy QA, RAG groundedness, schema following, access-control reasoning, and audit explanation quality.',
        'Reviewable Markdown and JSON artifacts with explicit failure categories and operational metrics.',
        'Written methodology, limitations, and provider-policy notes, plus a static leaderboard surface ready for provider-backed evaluation runs.',
      ],
      stack: ['Python', 'LLM Evaluation', 'AI Governance', 'Cost / Latency', 'CI'],
      links: [
        { label: 'GitHub', href: 'https://github.com/codychampion/llm-eval-workbench' },
        { label: 'Project page', href: '/projects/llm-eval-workbench' },
      ],
      images: [],
    },
    {
      id: 'paef-contract-compliance',
      title: 'PAEF: Atomic LLM Evaluation for Contract Compliance',
      role: 'First author · evaluation research',
      year: '2026',
      award: 'Zenodo preprint · DOI: 10.5281/zenodo.19848867',
      summary: 'A multi-contract, multi-model evaluation study comparing microagent-based atomic policy checks with monolithic LLM auditing across 193 service contracts and 7,913 labeled policy checks.',
      details: [
        'Compared microagent atomic evaluation with monolithic auditing across gpt-4.1-nano, gpt-4o-mini, and gpt-5-nano.',
        'Introduced token-level margin analysis for confidence, disagreement, salvage, and audit-ready diagnostics.',
        'Provides the atomic-evaluation methodology that informs the regulated-enterprise workbench.',
      ],
      stack: ['LLM Evaluation', 'Contract Compliance', 'Microagents', 'Token-Level Analysis'],
      links: [
        { label: 'Zenodo DOI', href: 'https://doi.org/10.5281/zenodo.19848867' },
        { label: 'Research page', href: '/research/paef-contract-compliance' },
      ],
      images: [],
    },
    {
      id: 'claude-burn',
      title: 'claude-burn-check',
      role: 'Creator · open-source Claude Code skill',
      year: '2026',
      award: 'Featured on LinkedIn · community-discussed tooling',
      summary: 'A diagnostic skill for Claude Code that finds and fixes the silent context-window burn — unignored noise, re-read configs, missing gitignores — in ~90 seconds. Built after discovering ~1,500 tokens per command being burned invisibly on my own system.',
      details: [
        'Scans the working tree for high-token-cost patterns: large configs re-read each turn, git noise, missing ignore files, and unbounded tool outputs.',
        'Surfaces a prioritized list of fixes with estimated tokens-per-turn savings, targeting the compounding cost many teams never see.',
        'Distributed as a portable Claude Code skill — install and run inline from any Claude Code session.',
        'Open-sourced in response to Anthropic rate-limit discussions; reframes \"quota\" as a context-hygiene problem before a capacity problem.',
      ],
      stack: ['Claude Code', 'Skills', 'Markdown/YAML', 'Shell'],
      links: [
        { label: 'GitHub', href: 'https://github.com/codychampion/claude-burn-check' },
      ],
      images: [],
    },
    {
      id: 'genai-systems',
      title: 'Enterprise GenAI systems — Accenture client delivery',
      role: 'Architecture + production delivery',
      year: '2025',
      award: 'Multiple client engagements · Confidential · global enterprise, telco, public-sector',
      summary: 'Led the technical work of moving GenAI use cases from promising demos into systems clients could actually operate: retrieval, tool use, human review, evaluation, and observability.',
      details: [
        'Designed reference architectures for ingestion, retrieval, LLM orchestration, tool use, evaluation, and observability.',
        'Hybrid retrieval stacks (vector + keyword + graph) with source attribution and confidence signals surfaced in the user interface.',
        'Evaluation loops combining ground truth, user feedback, and LLM-as-judge sampling so quality could be tracked after launch.',
        'Operational logging for quality, safety, latency, and cost, using Langfuse where it fit and conventional telemetry where it did not.',
        'Prompt-injection handling and role-based access controls aligned to client identity and data rules.',
      ],
      stack: ['Azure AI Foundry', 'GCP', 'RAG', 'Agents', 'Langfuse', 'MLflow', 'Python'],
      links: [],
      images: [],
    },
    {
      id: 'embedding-bench',
      title: 'Embedding Benchmarking — arXiv',
      role: 'Solo build · MLOps-focused evaluation framework',
      year: '2024',
      award: 'Weekend side project · full-stack from dataset to analysis',
      summary: 'A custom benchmarking framework built from scratch to evaluate 33 AI embedding models across 1,700 academic papers. Every component — core evaluation engine, statistical analysis pipeline, experiment configuration — designed for reproducibility and MLOps best practices.',
      details: [
        'Automated experiment configuration across 33 embedding models with deterministic seeds and fully reproducible runs.',
        'Statistical analysis pipeline for comparing embedding quality on retrieval, similarity, and clustering tasks over scientific text.',
        'Dataset: 1,700 arXiv papers spanning multiple fields — enables cross-domain generalization measurement.',
        'End-to-end MLOps rigor at personal-project scale: config-driven, versioned artifacts, clean separation of data, models, and evaluation.',
      ],
      stack: ['Python', 'Embeddings', 'MLOps', 'Statistical evaluation', 'arXiv corpus'],
      links: [
        { label: 'GitHub', href: 'https://github.com/codychampion/embedding_benchmaking_arvix' },
      ],
      images: [],
    },
    {
      id: 'wildfire',
      title: 'Wildfire Mitigation — Computer Vision ID of Hazard Fuels',
      role: 'Computer vision lead · hackathon build',
      year: '2021',
      award: 'Third Place · AWS Disaster Response Hackathon',
      summary: 'CV model identifying dead and diseased trees from 30m Landsat imagery in near-real-time — a spatially extensive alternative to the USFS Annual Insect & Disease Detection Survey for fuels management and utility line-clearance programs.',
      details: [],
      stack: ['Python', 'AWS SageMaker', 'Landsat / USGS', 'Transfer learning'],
      links: [
        { label: 'Devpost', href: 'https://devpost.com/software/wildfire-mitigation-computer-vision-id-of-hazard-fuels' },
        { label: 'GitHub', href: 'https://github.com/MarjorieRWillner/DisasterHack' },
      ],
      images: [],
    },
  ],
  focus: [
    'Enterprise GenAI architecture — RAG, agents, tool orchestration, LLMOps, Azure, GCP, observability',
    'LLM evaluation and model readiness — reliability, governance behavior, groundedness, security reasoning, cost/latency tracking',
    'AI governance for regulated deployment — EU AI Act readiness, risk classification, auditability, access control, prompt injection defense',
    'Available for senior AI roles in Dublin / Ireland / EMEA — regulated enterprise, public sector, financial services, cloud/SaaS AI',
  ],

  expertise: {
    // Numbers below are defensible from the CV + dissertation, not invented.
    // See comments for what each count contains.
    radar: [
      // 2016 DHS/ERDC internship → 2026
      { axis: 'Applied ML',       years: 10, projects: 7,  note: 'PhD digital-twin metabolome, West Nile forecasting, mosquito microbiome analysis, ODNI crop-stress ML, DARPA programs, 99.6% cost optimization, MRSA photodynamics' },
      // 2018 ODNI drone CV → 2026
      { axis: 'Computer Vision',  years: 8,  projects: 8,  note: 'AWS Wildfire, ODNI drone, IARPA global geospatial, WACV 2023, 2× IGARSS 2024, IGARSS 2023 biome, sensor-sim platform' },
      // 2011 B.S./M.S. research → 2026
      { axis: 'Research',         years: 15, projects: 11, note: '6 peer-reviewed publications + 1 Zenodo publication + 2 granted patents + PhD + M.S. dissertations' },
      // 2021 Accenture Federal production ML → 2026
      { axis: 'MLOps / LLMOps',   years: 5,  projects: 5,  note: '99.6% cost-reduction pipeline, Langfuse observability, AI monitoring framework, micro-vs-monolithic agent eval, GenAI security controls' },
      // Accenture Federal GenAI (diplomatic cable gen, ~2023) → 2026
      { axis: 'LLMs & GenAI',     years: 3,  projects: 7,  note: 'Diplomatic cable generator, embedding benchmark (arXiv), claude-burn-check, agent eval framework, NSF vector+graph DB, AI monitoring, RAG architectures' },
      // NSF CAIO advisor Sept 2024 → 2026
      { axis: 'AI Governance',    years: 2,  projects: 4,  note: 'NSF AIOps strategy, AI Development Playbook, 100+ CoP, approval/voting/literacy governance stack' },
    ],
    timeline: [
      { year: 2015, label: 'PhD research begins', org: 'New Mexico State University', color: 'research' },
      { year: 2018, label: 'Drone ML \u00b7 precision agriculture', org: 'ODNI / NGA', color: 'cv' },
      { year: 2020, label: 'DARPA program management', org: 'Booz Allen Hamilton', color: 'ml' },
      { year: 2021, label: 'AWS Wildfire CV \u2014 3rd place', org: 'Accenture Federal', color: 'cv' },
      { year: 2023, label: 'WACV + IGARSS first-author', org: 'Peer-reviewed research', color: 'research' },
      { year: 2024, label: 'Embedding benchmark \u00b7 arXiv', org: 'Independent', color: 'genai' },
      { year: 2025, label: 'NSF CAIO advisor \u2192 Accenture', org: 'NSF \u2192 Accenture Ireland', color: 'gov' },
      { year: 2026, label: 'Claude Certified Architect', org: 'Anthropic', color: 'genai' },
    ],
    tree: [
      { domain: 'LLMs & GenAI', count: 12, color: 'genai', children: [
        { label: 'RAG architectures', size: 'heavy' },
        { label: 'Agentic workflows', size: 'heavy' },
        { label: 'Evaluation frameworks', size: 'heavy' },
        { label: 'Prompt injection defense', size: 'medium' },
        { label: 'Embeddings at scale', size: 'medium' },
        { label: 'MCP / tool orchestration', size: 'medium' },
      ]},
      { domain: 'Computer Vision', count: 18, color: 'cv', children: [
        { label: 'Remote sensing / satellite', size: 'heavy' },
        { label: 'Semantic segmentation', size: 'heavy' },
        { label: 'Self-supervised / contrastive', size: 'medium' },
        { label: 'Drone platforms', size: 'medium' },
        { label: 'Transfer learning', size: 'heavy' },
        { label: 'Multi-scale analysis', size: 'medium' },
      ]},
      { domain: 'MLOps / LLMOps', count: 14, color: 'mlops', children: [
        { label: 'Langfuse observability', size: 'heavy' },
        { label: 'MLflow pipelines', size: 'heavy' },
        { label: 'CI/CD for models', size: 'medium' },
        { label: 'Cost / latency monitoring', size: 'medium' },
        { label: 'Eval-as-judge', size: 'medium' },
      ]},
      { domain: 'AI Governance', count: 9, color: 'gov', children: [
        { label: 'Enterprise responsible-AI', size: 'heavy' },
        { label: 'Federal AI adoption', size: 'heavy' },
        { label: 'Risk frameworks', size: 'medium' },
        { label: 'Security-conscious deployment', size: 'heavy' },
        { label: 'Policy \u2194 implementation', size: 'medium' },
      ]},
    ],
  },

  leadership: {
    teams: [
      { size: '2–5', label: 'Direct-report technical teams', context: 'Accenture, Accenture Federal Services, New Mexico Tech' },
      { size: '10–15', label: 'Subcontractor teams — program-level', context: 'Federal delivery engagements' },
    ],
    mentorship: [
      { role: 'Overseen senior capstone projects', org: 'Accenture Federal Services' },
      { role: 'Mentored 2 summer interns', org: 'Accenture Federal Services' },
      { role: 'Mentored 1 Pathways student', org: 'National Science Foundation' },
    ],
    communities: [
      { role: 'Co-chair', org: 'AI Community of Practice — 100+ members', note: 'Responsible-AI governance & adoption at NSF' },
    ],
  },

  recommendations: [
    {
      name: 'Dorothy Aronson',
      relationship: 'Chief AI Officer, NSF · managed Cody directly',
      date: 'April 2026',
      quote: 'More than just a brilliant scientist, he is dedicated, generous, creative and kind.',
    },
    {
      name: 'Marc Bosch Ruiz',
      relationship: 'Managing Director, Accenture · managed Cody directly',
      date: 'April 2026',
      quote: 'Cody excels at rapid prototyping. He can quickly turn complex ideas into working models with impressive speed and quality, helping teams validate ideas faster and accelerate R&D cycles. He also elevates the people around him: mentoring junior engineers, sharing knowledge openly, and building collaborative environments.',
    },
  ],

  speaking: [
    { year: '2025', type: 'Internal talk', title: 'Building enterprise GenAI in regulated environments', venue: 'Accenture — internal audience' },
    { year: '2025', type: 'Panel', title: 'From AI strategy to production delivery', venue: 'Accenture — internal panel' },
    { year: '2024', type: 'Publication', title: 'Advancing Multi-Scale Remote Sensing Analysis Through Self-Supervised Learning Fine-Tuning Strategies', venue: 'IEEE IGARSS', href: 'https://ieeexplore.ieee.org/document/10642493' },
    { year: '2024', type: 'Publication', title: 'Koopman-based Transition Detection in Satellite Imagery', venue: 'IEEE IGARSS', href: 'https://ieeexplore.ieee.org/document/10642336' },
    { year: '2023', type: 'Publication', title: 'Model Bias Adjustment Based on Biome Classification', venue: 'IEEE IGARSS · first author', href: 'https://ieeexplore.ieee.org/document/10283161' },
    { year: '2023', type: 'Publication', title: 'Semantic Segmentation in Aerial Imagery Using Multi-level Contrastive Learning', venue: 'WACV', href: 'https://openaccess.thecvf.com/content/WACV2023/papers/Tang_Semantic_Segmentation_in_Aerial_Imagery_Using_Multi-Level_Contrastive_Learning_With_WACV_2023_paper.pdf' },
  ],

  experience: [
    {
      company: 'Accenture',
      role: 'Applied AI Architect & GenAI Systems Lead',
      sub: 'GenAI architecture & delivery leadership · official title: Industry Data & AI Decision Science Manager',
      period: 'Aug 2025 — Present',
      location: 'Dublin, Ireland',
      bullets: [
        'Lead design and delivery for AI and GenAI systems that have to pass security, delivery, and operational scrutiny.',
        'Shape architectures across data pipelines, RAG, agent workflows, orchestration, evaluation, and observability.',
        'Help clients move from proof-of-concept to production without losing sight of cost, reliability, access control, or user trust.',
        'Build cloud-native ML and GenAI systems across GCP and Azure, with practical MLOps/LLMOps around quality, safety, latency, and spend.',
        'Implemented GenAI security controls including prompt sanitization and platform-native role-based access.',
      ],
    },
    {
      company: 'National Science Foundation',
      role: 'Lead Data Scientist / AI Oversight',
      sub: 'GS-15 · Advisor to the Chief AI Officer',
      period: 'Sep 2024 — Aug 2025',
      location: 'Alexandria, VA',
      bullets: [
        'Strategic advisor to the NSF Chief AI Officer on enterprise AI governance, risk management, and technology adoption.',
        'Led organization-wide AI transformation: AIOps strategy and AI Development Playbook guiding responsible deployment across mission-critical environments.',
        'Co-chaired a 100+ member AI Community of Practice; established governance frameworks enabling coordinated responsible AI development.',
        'Designed the organization\u2019s first vector- and graph-database architecture, delivered by the engineering team; led tool evaluations as a voting member of the engineering review board.',
        'Developed governance structures: approval processes, voting boards, documentation standards, AI literacy, risk classification, transparency, audit readiness.',
      ],
    },
    {
      company: 'Accenture Federal Services',
      role: 'Machine Learning Engineer — Manager',
      sub: 'Innovation Hub · DoD, DoS, IARPA',
      period: 'Jun 2021 — Sep 2024',
      location: 'Arlington, VA',
      bullets: [
        'Led lean, multi-disciplinary teams within Accenture Federal\u2019s innovation hub, delivering applied AI across GenAI, computer vision, and geospatial analytics for federal clients.',
        'Shipped a GenAI diplomatic cable generator for the State Department, GenAI task-management automation in secured Army environments, and global-scale geospatial CV for IARPA.',
        'Personally wrote the ML codebase and cloud architecture optimizations that achieved a 99.6% infrastructure cost reduction on a global geospatial platform.',
        'Designed and customized foundation models and ML pipelines for cost-optimized, production-ready deployments in secured environments.',
        'Co-led the Computer Vision Community of Interest, setting technical standards and best practices across the organization.',
      ],
    },
    {
      company: 'Booz Allen Hamilton',
      role: 'Lead Scientist — Associate',
      sub: 'DARPA Program Management',
      period: 'Jan 2020 — Jun 2021',
      location: 'Arlington, VA',
      bullets: [
        'Strategic AI/ML technical advising that helped secure over $30M in program funds.',
        'Led DARPA program management from inception through successful completion.',
        'Developed technical evaluation frameworks and success metrics for AI/ML programs.',
        'Authored and evaluated technical requirements for BAAs and RFIs.',
      ],
    },
    {
      company: 'ODNI / ORISE / NGA',
      role: 'Intelligence Community Postdoctoral Researcher',
      sub: 'Drone ML · Computer Vision · CUDA',
      period: 'Oct 2018 — Dec 2019',
      location: 'Socorro, NM',
      bullets: [
        'Designed a fully functional drone-based ML system for detecting crop stress — precision agriculture and biodefense.',
        'Built a simulation platform for testing multiple sensors and CV algorithms in-silico for rapid screening.',
        'Custom GPU computing in CUDA to accelerate critical computations across large-scale datasets.',
      ],
    },
  ],

  education: [
    {
      degree: 'Ph.D. Biology',
      school: 'New Mexico State University',
      period: '2014 — 2018',
      detail: 'Concentration: Microbiology · Minor: Applied Statistics. Dissertation: “Impact of Oxidative Stress on the Malaria Vector, Anopheles gambiae” — investigating the role of NADPH regeneration in redox homeostasis, mosquito longevity, fecundity, and insecticide resistance. Built a digital twin of the mosquito metabolome informed by wet-lab experiments and sequencing data, using the model to identify novel insecticide applications that resulted in a patent. Awarded the NSF Graduate Research Fellowship on a competitive proposal.',
    },
    {
      degree: 'B.S. / M.S. Biology',
      school: 'New Mexico Institute of Mining and Technology',
      period: '2009 — 2014',
      detail: 'Dissertation: Photodynamic Anti-MRSA Activity of Modified Indoles.',
    },
  ],

  publications: [
    { title: 'Parallelized Atomic Evaluation Framework (PAEF) for Contract Compliance: A Multi-Contract, Multi-Model Study with Token-Level Margin Analysis', venue: 'Zenodo · Publication', year: 2026, firstAuthor: true, href: 'https://doi.org/10.5281/zenodo.19848867' },
    { title: 'Advancing Multi-Scale Remote Sensing Analysis Through Self-Supervised Learning Fine-Tuning Strategies', venue: 'IEEE IGARSS', year: 2024, href: 'https://ieeexplore.ieee.org/document/10642493' },
    { title: 'Koopman-based Transition Detection in Satellite Imagery: Unveiling Construction Phase Dynamics Through Material Histogram Analysis', venue: 'IEEE IGARSS', year: 2024, href: 'https://ieeexplore.ieee.org/document/10642336' },
    { title: 'Semantic Segmentation in Aerial Imagery Using Multi-level Contrastive Learning with Local Consistency', venue: 'WACV', year: 2023, href: 'https://openaccess.thecvf.com/content/WACV2023/papers/Tang_Semantic_Segmentation_in_Aerial_Imagery_Using_Multi-Level_Contrastive_Learning_With_WACV_2023_paper.pdf' },
    { title: 'Model Bias Adjustment Based on Biome Classification', venue: 'IEEE IGARSS', year: 2023, firstAuthor: true, href: 'https://ieeexplore.ieee.org/document/10283161' },
    { title: 'A Systematic Analysis of Mosquito-Microbiome Biosynthetic Gene Clusters Reveals Antimalarial Siderophores that Reduce Mosquito Reproduction Capacity', venue: 'Cell Chemical Biology', year: 2020, href: 'https://doi.org/10.1016/j.chembiol.2020.06.012' },
    { title: 'Forecasting of West Nile Epidemics Using Google Trends: US State-Specific Search Behavior', venue: 'Annals of Behavioral Medicine', year: 2018, href: 'https://doi.org/10.1093/abm/kay063' },
  ],

  patents: [
    { title: 'Enhancement of pyrethroid insecticide activity with paraquat ("PQ") as a synergist', id: 'US62622546', href: 'https://patents.google.com/?q=US62622546' },
    { title: 'Antibiotic sensitivity-restoring and photosensitive agents', id: 'US15133430', href: 'https://patents.google.com/patent/US20160304453' },
  ],

  awards: [
    { year: '2026', title: 'Claude Certified Architect, Foundations', org: 'Anthropic' },
    { year: '2023', title: 'ICAgile Certified Professional', org: 'ICAgile' },
    { year: '2021', title: 'AWS Wildfire Mitigation Project — Computer Vision ID of Hazard Fuels', org: 'AWS' },
    { year: '2020', title: 'Microsoft Certified Azure Fundamentals', org: 'Microsoft' },
    { year: '2018', title: 'Outstanding Graduate Award', org: 'College of Arts and Sciences, NMSU' },
    { year: '2018', title: 'Graduate Award in Research Excellence', org: 'Department of Biology, NMSU' },
    { year: '2017', title: 'Travis and Wendy Traylor Endowment', org: 'Biology Department, NMSU' },
    { year: '2015–2018', title: 'NSF Graduate Research Fellowship', org: 'National Science Foundation' },
    { year: '2014', title: 'Meritorious Winner — COMAP Mathematical Contest in Modeling', org: 'COMAP' },
  ],

  skills: [
    { group: 'GenAI & AI/ML', items: ['LLMs', 'Retrieval-Augmented Generation (RAG)', 'Embeddings', 'Agents / agentic workflows', 'Deep learning', 'Computer vision', 'NLP'] },
    { group: 'Architecture & Delivery', items: ['AI system design', 'Custom orchestration', 'Evaluation frameworks', 'Observability', 'Model serving', 'Security-conscious deployment'] },
    { group: 'MLOps / LLMOps', items: ['CI/CD', 'MLflow', 'Langfuse', 'Quality / safety / cost / latency monitoring', 'Deployment automation', 'Productionization'] },
    { group: 'Programming', items: ['Python', 'R', 'Bash', 'SQL', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'XGBoost', 'LightGBM'] },
    { group: 'Cloud & Infrastructure', items: ['AWS', 'Amazon Bedrock', 'Azure', 'Azure AI Foundry', 'GCP', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Bicep'] },
    { group: 'Data & Platforms', items: ['Pandas', 'NumPy', 'pgvector', 'ChromaDB', 'Snowflake', 'Graph databases', 'Tableau', 'Matplotlib', 'Jupyter', 'Git'] },
  ],
};
