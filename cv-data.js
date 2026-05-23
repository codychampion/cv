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
    lead: 'I build production GenAI systems for regulated environments: RAG, agents, LLM evaluation, observability, security controls, and AI governance.',
    proofA: '99% infrastructure cost reduction',
    proofB: 'advisor to NSF\u2019s Chief AI Officer',
    scope: `leading GenAI architecture and delivery at Accenture Ireland, Dublin.`,
    close: '',
  },

  heroStats: [
    { value: '99%', label: 'ML infra cost reduction' },
    { value: '$30M+', label: 'AI/ML program funding advised' },
    { value: '100+', label: 'AI governance community co-chaired' },
  ],

  narrative: `I started in scientific machine learning: drones, remote sensing, microbiology, and messy real-world data. Later I moved into federal delivery and AI governance, including advising the National Science Foundation\u2019s Chief AI Officer. Today I lead GenAI and agentic AI work at Accenture. The through-line is practical: build the thing, understand the institution around it, and make sure the system can survive contact with users, budgets, and oversight.`,

  outcomes: [
    { metric: '99%', label: 'reduction in ML infrastructure cost via codebase and cloud architecture optimization' },
    { metric: '$30M+', label: 'in program funds secured through strategic AI/ML technical advising' },
    { metric: '100+', label: 'member AI Community of Practice co-chaired, enabling responsible AI governance' },
    { metric: '2', label: 'patents granted across AI-adjacent biology and synergist pharmacology research' },
  ],

  proof: [
    { label: 'Shipped Systems', value: 'State Department GenAI, secured Army automation, IARPA geospatial CV, and enterprise GenAI delivery' },
    { label: 'Cost Impact', value: '99% ML infrastructure cost reduction on a global geospatial platform', link: 'case-study-ml-cost.html' },
    { label: 'Governance', value: 'Advisor to NSF Chief AI Officer; co-chaired 100+ member AI Community of Practice' },
    { label: 'Research', value: 'First-author 2026 Zenodo DOI, 6 peer-reviewed papers, and 2 granted patents' },
    { label: 'Third-party Proof', value: 'Recommended by NSF CAIO Dorothy Aronson and Accenture Managing Director Marc Bosch Ruiz' },
  ],

  projects: [
    {
      id: 'agent-decomposition',
      title: 'Agent Decomposition — original academic research',
      role: 'Primary author · independent research',
      year: '2026',
      award: 'Zenodo preprint · DOI: 10.5281/zenodo.19848867',
      summary: 'Original research comparing micro-agent vs. monolithic-agent architectures: when decomposition helps, when it hurts, and how decomposition choices affect cost, latency, reliability, and recoverability in production-grade agentic systems. Builds directly on systems I’ve shipped in enterprise settings.',
      details: [
        'Formal taxonomy of decomposition strategies: by skill, by data boundary, by latency budget, and by blast-radius.',
        'Evaluation framework comparing end-to-end task success, token economics, and failure-mode distributions across decomposition strategies on matched workloads.',
        'Empirical findings on the crossover points where monoliths outperform micro-agents and vice-versa — with guidance for architects choosing patterns under real constraints.',
        'Preprint released on Zenodo with DOI; code release planned as follow-on work.',
      ],
      stack: ['Agentic architecture', 'Evaluation', 'Empirical AI research'],
      links: [
        { label: 'Zenodo DOI', href: 'https://doi.org/10.5281/zenodo.19848867' },
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
      id: 'sdlc-agentic',
      title: 'Agentic SDLC — end-to-end software delivery with agents',
      role: 'Architect · agentic workflow design for delivery teams',
      year: '2025',
      award: 'Accenture delivery pattern · reusable across engagements',
      summary: 'Designed an agentic software-delivery pattern that embeds specialized agents across the SDLC — requirements decomposition, design, implementation, review, test, and release — with human checkpoints and full audit trails. Built to be dropped into regulated enterprise environments without compromising governance.',
      details: [
        'Role-based agent roster (spec, architect, implementer, reviewer, tester, release) wired through a shared context and artifact store for reproducibility.',
        'Human-in-the-loop checkpoints at every state transition with structured approvals, generated change diffs, and rationale capture for audit.',
        'Evaluation harness measuring correctness, review quality, test coverage deltas, and rework rate, so the system improves from evidence rather than opinion.',
        'Security controls: sandboxed execution, secret-free prompts, least-privilege tool access, and MCP-based tool orchestration so capabilities are explicit and auditable.',
      ],
      stack: ['Agents', 'MCP', 'Claude Code', 'Evaluation harnesses', 'GitLab CI/CD', 'Azure'],
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
    'LLM evaluation and AI safety — refusal behavior, groundedness, red-team probes, failure taxonomy, cost/latency tracking',
    'AI governance for regulated deployment — EU AI Act readiness, risk classification, auditability, access control, prompt injection defense',
    'Available for senior AI roles in Dublin / Ireland / EMEA — regulated enterprise, public sector, financial services, cloud/SaaS AI',
  ],

  expertise: {
    // Numbers below are defensible from the CV + dissertation, not invented.
    // See comments for what each count contains.
    radar: [
      // 2016 DHS/ERDC internship → 2026
      { axis: 'Applied ML',       years: 10, projects: 7,  note: 'PhD digital-twin metabolome, West Nile forecasting, mosquito microbiome analysis, ODNI crop-stress ML, DARPA programs, 99% cost-optimization, MRSA photodynamics' },
      // 2018 ODNI drone CV → 2026
      { axis: 'Computer Vision',  years: 8,  projects: 8,  note: 'AWS Wildfire, ODNI drone, IARPA global geospatial, WACV 2023, 2× IGARSS 2024, IGARSS 2023 biome, sensor-sim platform' },
      // 2011 B.S./M.S. research → 2026
      { axis: 'Research',         years: 15, projects: 11, note: '6 peer-reviewed publications + 1 Zenodo publication + 2 granted patents + PhD + M.S. dissertations' },
      // 2021 Accenture Federal production ML → 2026
      { axis: 'MLOps / LLMOps',   years: 5,  projects: 5,  note: '99% cost-reduction pipeline, Langfuse observability, AI monitoring framework, micro-vs-monolithic agent eval, GenAI security controls' },
      // Accenture Federal GenAI (diplomatic cable gen, ~2023) → 2026
      { axis: 'LLMs & GenAI',     years: 3,  projects: 7,  note: 'Diplomatic cable generator, embedding benchmark (arXiv), claude-burn-check, agent eval framework, NSF vector+graph DB, AI monitoring, RAG architectures' },
      // NSF CAIO advisor Sept 2024 → 2026
      { axis: 'AI Governance',    years: 2,  projects: 4,  note: 'NSF AIOps strategy, AI Development Playbook, 100+ CoP, approval/voting/literacy governance stack' },
    ],
    timeline: [
      { year: 2015, label: 'PhD research begins', color: 'research' },
      { year: 2018, label: 'Drone ML \u00b7 precision agriculture', color: 'cv' },
      { year: 2020, label: 'DARPA program management', color: 'ml' },
      { year: 2021, label: 'AWS Wildfire CV \u2014 3rd place', color: 'cv' },
      { year: 2023, label: 'WACV + IGARSS first-author', color: 'research' },
      { year: 2024, label: 'Embedding benchmark \u00b7 arXiv', color: 'genai' },
      { year: 2025, label: 'NSF CAIO advisor \u2192 Accenture', color: 'gov' },
      { year: 2026, label: 'Claude Certified Architect', color: 'genai' },
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
      role: 'Industry Data & AI Decision Science Manager',
      sub: 'AI / GenAI Solutions Architecture',
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
        'Engineered the organization\u2019s first vector and graph database capabilities; led tool evaluations as voting member of the engineering review board.',
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
        'Personally wrote the ML codebase and cloud architecture optimizations that achieved a 99% infrastructure cost reduction on a global geospatial platform.',
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
