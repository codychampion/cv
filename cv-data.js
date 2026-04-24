// cv-data.js — shared CV content
window.CV_DATA = {
  name: 'Cody Champion',
  tagline: 'Building Enterprise GenAI Systems in Regulated Environments',
  role: 'AI Technical Lead @ Accenture · PhD',
  location: 'Dublin, Ireland',
  email: 'cody.james.champion@gmail.com',
  linkedin: 'linkedin.com/in/cody-champion',
  github: 'github.com/codychampion',
  site: 'codychampion.bitsandbeakers.com',
  photo: 'assets/cody-headshot.png',

  featured: {
    eyebrow: 'Early Adopter · March 2026',
    title: 'Claude Certified Architect, Foundations',
    body: 'Passed as an Early Adopter within the first cohort of Anthropic\u2019s first official technical certification — a proctored, scenario-based exam covering agentic system design, tool orchestration, context management, and production-grade Claude architecture. Not a prompting badge: a systems-design exam for the problems enterprise AI is actually shipping against.',
    badge: 'ANTHROPIC · CCA-F',
  },

  summary: `Technology and AI leader with experience spanning enterprise AI strategy, production GenAI delivery, applied machine learning, computer vision, and AI governance across digital platforms, telecommunications, public-sector, defense, and scientific research environments.`,

  narrative: `My career has taken me from designing machine learning systems on drones for the Intelligence Community, to governing AI adoption at the National Science Foundation as advisor to the Chief AI Officer, to leading enterprise GenAI and agentic AI implementations at Accenture. I've both written the governance playbook and shipped the production code — including GenAI into classified, air-gapped environments and a 99% infrastructure cost reduction on a global-scale platform.`,

  outcomes: [
    { metric: '99%', label: 'reduction in ML infrastructure cost via codebase and cloud architecture optimization' },
    { metric: '$30M+', label: 'in program funds secured through strategic AI/ML technical advising' },
    { metric: '100+', label: 'member AI Community of Practice co-chaired, enabling responsible AI governance' },
    { metric: '2', label: 'patents granted across AI-adjacent biology and synergist pharmacology research' },
  ],

  projects: [
    {
      id: 'genai-systems',
      title: 'Enterprise GenAI systems — Accenture client delivery',
      role: 'AI Technical Lead · architecture + production delivery',
      year: '2025',
      award: 'Multiple client engagements · Confidential · global enterprise, telco, public-sector',
      summary: 'Led architecture and production delivery across multiple GenAI pilot and production systems, integrating retrieval, agentic tool use, and human-in-the-loop workflows into regulated enterprise operations. Owned target-state architecture, evaluation framework, observability posture, and responsible-AI guardrails end-to-end.',
      details: [
        'Target-state reference architectures spanning ingestion, retrieval, LLM orchestration, tool use, evaluation, and observability — grounded in enterprise security and compliance constraints.',
        'Hybrid retrieval stacks (vector + keyword + graph) with source attribution and confidence signals surfaced in the user interface.',
        'Evaluation frameworks combining annotated ground truth, user-satisfaction signal, and LLM-as-judge hallucination sampling for continuous quality monitoring.',
        'Observability via Langfuse and conventional logging covering quality, safety, latency, and cost — enabling production operations and incident response.',
        'Prompt-injection sanitization and platform-native role-based access control aligned to client identity and data-governance postures.',
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
        'Evaluation harness measuring correctness, review-comment quality, test coverage deltas, and rework rate — so the system improves on evidence, not vibes.',
        'Security controls: sandboxed execution, secret-free prompts, least-privilege tool access, and MCP-based tool orchestration so capabilities are explicit and auditable.',
      ],
      stack: ['Agents', 'MCP', 'Claude Code', 'Evaluation harnesses', 'GitLab CI/CD', 'Azure'],
      links: [],
      images: [],
    },
    {
      id: 'agent-decomposition',
      title: 'Agent Decomposition — original academic research',
      role: 'Primary author · independent research',
      year: '2026',
      award: 'Paper in progress · preprint forthcoming',
      summary: 'Original research comparing micro-agent vs. monolithic-agent architectures: when decomposition helps, when it hurts, and how decomposition choices affect cost, latency, reliability, and recoverability in production-grade agentic systems. Builds directly on systems I\u2019ve shipped in enterprise settings.',
      details: [
        'Formal taxonomy of decomposition strategies: by skill, by data boundary, by latency budget, and by blast-radius.',
        'Evaluation framework comparing end-to-end task success, token economics, and failure-mode distributions across decomposition strategies on matched workloads.',
        'Empirical findings on the crossover points where monoliths outperform micro-agents and vice-versa — with guidance for architects choosing patterns under real constraints.',
        'Preprint and code release planned; will be linked here on publication.',
      ],
      stack: ['Agentic architecture', 'Evaluation', 'Empirical AI research'],
      links: [],
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
        'Open-sourced in response to Anthropic rate-limit discussions; reframes "quota" as a context-hygiene problem before a capacity problem.',
      ],
      stack: ['Claude Code', 'Skills', 'Markdown/YAML', 'Shell'],
      links: [
        { label: 'GitHub', href: 'https://github.com/codychampion/claude-burn-check' },
      ],
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
      role: 'Computer vision lead · model + data products',
      year: '2021',
      award: 'Third Place · AWS Disaster Response Hackathon',
      summary: 'Built a CV model to identify dead and diseased trees from 30m Landsat satellite imagery in near-real-time, giving federal, state, and local land managers a spatially extensive alternative to the USFS Annual Insect & Disease Detection Survey.',
      details: [
        'Transferred USFS survey shapefile labels onto Landsat bands via Geo-tiff conversion to create the training label set.',
        'Pretrained an ImageNet-style feature representation over Landsat bands + time and fine-tuned with logistic regression (partial-fit) for per-pixel mortality classification.',
        'Visualized model output, error, and ground truth against ground-truth masks; exported predictions back to Geo-tiff for downstream GIS use.',
        'Extendable to any resolution or region — targeting fuels management, invasive-species early detection, and utility line-clearance programs.',
      ],
      stack: ['Python', 'R', 'AWS SageMaker', 'Landsat / USGS', 'ESRI', 'Transfer learning'],
      links: [
        { label: 'Devpost', href: 'https://devpost.com/software/wildfire-mitigation-computer-vision-id-of-hazard-fuels' },
        { label: 'GitHub', href: 'https://github.com/MarjorieRWillner/DisasterHack' },
        { label: 'Live dashboard', href: 'https://afs.maps.arcgis.com/apps/dashboards/c1ee9e7bf2ca4a549bca5c01ff288ccc' },
      ],
      images: [
        { src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/827/256/datas/gallery.jpg', caption: 'Example model output — predicted mortality vs. ground truth' },
        { src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/827/258/datas/gallery.jpg', caption: 'Train / test split mask over Landsat tile' },
        { src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/827/259/datas/gallery.jpg', caption: 'Model metrics — per-class performance' },
        { src: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/827/261/datas/gallery.jpg', caption: 'Transfer learning curves' },
      ],
    },
  ],
  focus: [
    'Enterprise GenAI & agentic AI architectures',
    'End-to-end delivery — target-state design through production ops',
    'AI-enabled process automation with responsible AI guardrails',
    'Helping leadership teams move from AI strategy to measurable outcomes',
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
      { axis: 'Research',         years: 15, projects: 10, note: '6 peer-reviewed publications + 2 granted patents + PhD + M.S. dissertations' },
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
        'Lead end-to-end design and delivery of production GenAI and AI systems, translating complex business and mission use cases into secure, scalable implementations across global enterprises.',
        'Define target-state AI architectures spanning data pipelines, LLM/RAG and agentic patterns, orchestration, evaluation frameworks, and system observability.',
        'Serve as technical authority for GenAI solutioning, guiding clients from proof-of-concept through hardened production under enterprise, regulatory, and security constraints.',
        'Design and implement cloud-native ML and GenAI systems across GCP and Azure with modern MLOps/LLMOps — evaluation, observability, and monitoring of quality, safety, cost, and latency.',
        'Established GenAI security controls including prompt sanitization and platform-native, role-based access controls.',
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
        'Achieved 99% infrastructure cost reduction through ML codebase optimization and cloud architecture redesign.',
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
