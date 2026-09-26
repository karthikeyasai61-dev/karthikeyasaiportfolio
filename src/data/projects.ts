import type { Project, Achievement, SkillGroup, HackathonItem } from '../types/project';

export const ALL_PROJECTS: Project[] = [
  {
    id: 'gramsetu-prototype1',
    name: 'GramSetu-prototype1',
    displayName: 'Gram Setu — Rural Connectivity Portal',
    tagline: 'Bridging village administration, telehealth, and communication barriers',
    description: 'Civic tech platform tailored for rural administration with regional language translation, voice calling, video consultation, and grievance ticketing.',
    overview: 'Gram Setu is an award-winning digital governance and rural communication initiative built to empower village panchayats and residents with multilingual access to essential civic and healthcare infrastructure.',
    problem: 'Rural communities face substantial digital literacy barriers, language gaps, and remote geographical hurdles when seeking panchayat administrative services and timely medical advice.',
    solution: 'Engineered an accessible web platform providing localized regional language interfaces, automated speech prompts, and direct peer-to-peer audio/video calling to connect villagers directly with panchayat officers and healthcare providers.',
    keyFeatures: [
      'Multilingual interface supporting native regional languages and voice prompts',
      'Integrated real-time text, voice, and video consultation capabilities',
      'Panchayat welfare scheme dissemination and citizen grievance ticketing',
      'Low-bandwidth performance profile for stable access over 2G/3G mobile networks'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/GramSetu-prototype1',
    primaryLanguage: 'JavaScript',
    technologies: ['JavaScript', 'WebRTC', 'HTML5', 'CSS3', 'REST APIs', 'Node.js'],
    category: 'Full Stack',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-24',
    createdAt: '2026-03-24',
    featured: true,
    badgeText: '3rd Prize — Hackathon',
    architectureWorkflow: [
      { step: 1, title: 'Citizen Access', desc: 'Villager selects regional language and enters telephone or voice input.' },
      { step: 2, title: 'WebRTC Signaling', desc: 'Platform establishes low-latency audio/video bridge with panchayat officer.' },
      { step: 3, title: 'Civic Database', desc: 'Grievance ticket or health inquiry is logged and tracked to resolution.' }
    ],
    filesSnippet: ['README.md', 'index.html', 'app.js', 'webrtc-handler.js'],
    visualTheme: 'emerald'
  },
  {
    id: 'skillup-ai',
    name: 'SkillUp-AI',
    displayName: 'SkillUp AI — Adaptive Learning Platform',
    tagline: 'College gives one curriculum. SkillUp evolves it for YOU.',
    description: 'AI-powered personalized learning platform for engineering students that generates dynamic curricula, tracks mastery, and adapts to learner pace.',
    overview: 'SkillUp AI revolutionizes engineering education by moving away from static one-size-fits-all college syllabi into an intelligent, adaptive curriculum engine that tailors milestones based on student performance.',
    problem: 'Every engineering student learns at a different pace and targets unique industry roles, yet conventional university curricula remain rigid, leading to skill gaps upon graduation.',
    solution: 'SkillUp AI analyses student baseline knowledge through diagnostic drills, dynamically generates topic progression roadmaps, and adjusts exercise complexity in real time.',
    keyFeatures: [
      'Dynamic curriculum synthesis adapting to individual student mastery milestones',
      'Targeted topic breakdowns across core computer science and engineering disciplines',
      'Interactive student telemetry dashboard with competency visualizers',
      'React + Vite modular client architecture with clean component boundaries'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/SkillUp-AI',
    primaryLanguage: 'TypeScript',
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'AI Engineering', 'REST API'],
    category: 'Python / AI',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-22',
    createdAt: '2026-03-22',
    featured: true,
    badgeText: 'Featured Project',
    architectureWorkflow: [
      { step: 1, title: 'Skill Diagnostics', desc: 'Student completes diagnostic concept checks across domain topics.' },
      { step: 2, title: 'AI Curriculum Engine', desc: 'Generative algorithms map custom study progression and target exercises.' },
      { step: 3, title: 'Telemetry Loop', desc: 'Student quiz telemetry feeds back to continually optimize learning path.' }
    ],
    filesSnippet: ['client/src/App.tsx', 'client/src/components', 'client/package.json', 'README.md'],
    visualTheme: 'indigo'
  },
  {
    id: 'skillbridge-p2',
    name: 'SkillBridge-P2',
    displayName: 'SkillBridge — AI Mentorship Ecosystem',
    tagline: 'Autonomous career trajectory matching and AI mentorship guidance',
    description: 'Comprehensive mentorship platform featuring Google Gemini AI career matching, automated transactional notifications, and Express/Firebase backend.',
    overview: 'SkillBridge bridges the divide between aspiring developers and industry career standards by providing automated AI evaluations, personalized roadmap suggestions, and structured mentorship onboarding.',
    problem: 'Students struggle to find personalized mentorship and receive actionable feedback on how their project portfolio measures up to competitive industry expectations.',
    solution: 'Constructed a full-stack platform integrating Google Gemini AI to analyze user skills, generate step-by-step career milestones, and coordinate communications via automated Nodemailer workflows.',
    keyFeatures: [
      'Gemini AI integration for real-time career guidance and roadmap generation',
      'Automated email notification pipeline powered by Nodemailer',
      'Modular Node.js and Express backend with Firebase Admin authentication',
      'End-to-end user onboarding workflows and structured data models'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/SkillBridge-P2',
    liveUrl: 'https://skillbridge.website',
    primaryLanguage: 'JavaScript',
    technologies: ['JavaScript', 'Node.js', 'Express', 'Gemini AI', 'Firebase', 'Nodemailer'],
    category: 'Full Stack',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: true,
    badgeText: 'Featured Project',
    architectureWorkflow: [
      { step: 1, title: 'User Onboarding', desc: 'Student submits target job roles and current technical stack.' },
      { step: 2, title: 'Gemini AI Evaluator', desc: 'AI analyzes skill gaps and generates tailored roadmap milestones.' },
      { step: 3, title: 'Notification Hub', desc: 'Backend dispatches milestone reminders and interview resources via email.' }
    ],
    filesSnippet: ['backend/server.js', 'backend/mailer.js', 'backend/test_gemini.js', 'DESIGN.md'],
    visualTheme: 'teal'
  },
  {
    id: 'sensovec',
    name: 'sensovec',
    displayName: 'Sensovec — IoT Telemetry & Industrial Analytics',
    tagline: 'Commercial IoT telemetry monitoring, sensor data pipelines, and analytics platform',
    description: 'Freelance client engineering project delivering an end-to-end sensor telemetry platform for real-time device monitoring, anomaly threshold detection, and fleet telemetry dashboards.',
    overview: 'Sensovec is a commercial freelance software solution engineered for industrial IoT operators to ingest, aggregate, and visualize high-frequency sensor streams across distributed hardware devices.',
    problem: 'Industrial equipment operators lacked a unified, real-time dashboard to monitor environmental sensors, track voltage/temperature surges, and prevent costly hardware failures.',
    solution: 'Designed and deployed an interactive cloud dashboard connecting device telemetry with live alerting systems, threshold violation triggers, and historical trend analytics.',
    keyFeatures: [
      'Commercial freelance engineering project delivering production-ready IoT interfaces',
      'Real-time sensor telemetry streaming and interactive multi-parameter graphs',
      'Configurable warning and critical alert thresholds for industrial hardware',
      'Device health fleet management and exportable maintenance audit reports'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/sensovec',
    primaryLanguage: 'TypeScript',
    technologies: ['TypeScript', 'React', 'Node.js', 'IoT Telemetry', 'REST APIs', 'Tailwind CSS'],
    category: 'Full Stack',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-25',
    createdAt: '2026-01-15',
    featured: true,
    badgeText: 'Freelance Project',
    architectureWorkflow: [
      { step: 1, title: 'Sensor Ingest', desc: 'IoT field sensors stream temperature, pressure, and vibration metrics via REST/MQTT.' },
      { step: 2, title: 'Threshold Evaluation', desc: 'Backend microservice evaluates sensor bounds against customer alert configs.' },
      { step: 3, title: 'Live Dashboard', desc: 'Real-time telemetry graphs render live status updates and alert operator teams.' }
    ],
    filesSnippet: ['src/App.tsx', 'src/components/TelemetryView.tsx', 'package.json', 'README.md'],
    visualTheme: 'amber'
  },
  {
    id: 'bloodconnect',
    name: 'bloodconnect',
    displayName: 'BloodConnect — Emergency Donor Network',
    tagline: 'Life-saving blood donor discovery and hospital matching system',
    description: 'High-reliability emergency blood donation platform linking donors and healthcare centers with verified availability and blood group filtering.',
    overview: 'BloodConnect is a mission-critical web application engineered to eliminate delays in securing urgent blood transfusions during accidents and surgical emergencies.',
    problem: 'During medical emergencies, hospitals and family members lose vital hours calling informal contacts or searching unverified message boards for rare blood types.',
    solution: 'Designed an accessible, reactive web portal with verified donor registries, instant blood group matching (A+, B+, O-, AB-, etc.), and location proximity filters.',
    keyFeatures: [
      'Modern accessible frontend powered by Radix UI primitives and Tailwind CSS',
      'Robust type-safe schema and database integration utilizing Drizzle ORM',
      'Real-time blood group inventory filtering and urgent requisition alerts',
      'Strict input validation and donor verification forms'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/bloodconnect',
    primaryLanguage: 'TypeScript',
    technologies: ['TypeScript', 'React', 'Drizzle ORM', 'Tailwind CSS', 'Radix UI', 'Vite'],
    category: 'Full Stack',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-02-20',
    featured: true,
    badgeText: 'Healthcare Tech',
    architectureWorkflow: [
      { step: 1, title: 'Emergency Alert', desc: 'Hospital logs urgent requisition with blood type and units needed.' },
      { step: 2, title: 'Drizzle ORM Query', desc: 'Type-safe query filters registered eligible donors by group and area.' },
      { step: 3, title: 'Rapid Dispatch', desc: 'System connects hospital coordinator with verified responsive donor.' }
    ],
    filesSnippet: ['package.json', 'drizzle.config.ts', 'tailwind.config.ts', 'src/App.tsx'],
    visualTheme: 'rose'
  },
  {
    id: 'picscan-p1',
    name: 'PicScan-P1',
    displayName: 'PicScan — Document & Visual Scanner',
    tagline: 'Computer vision document boundary detection and clarity optimization',
    description: 'Visual document scanning prototype implementing image edge detection, perspective transformation, and automated contrast enhancement.',
    overview: 'PicScan addresses the everyday challenge of capturing clean, readable digital documents from handheld smartphone cameras under imperfect lighting and skewed angles.',
    problem: 'Paper documents photographed with smartphone cameras regularly suffer from perspective skew, dark shadows, and illegible text contrast.',
    solution: 'Developed an intelligent image processing pipeline that isolates paper boundaries, corrects quadrilateral skew into planar orientation, and applies adaptive binarization.',
    keyFeatures: [
      'Automated contour boundary detection for paper sheets and receipts',
      'Perspective warp transformation converting angled photos into flat scans',
      'Adaptive contrast filters for high-legibility OCR text extraction',
      'Streamlined lightweight architecture optimized for rapid client processing'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/PicScan-P1',
    primaryLanguage: 'Python',
    technologies: ['Python', 'Computer Vision', 'Image Processing', 'OpenCV', 'Algorithms'],
    category: 'Python / AI',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: true,
    badgeText: 'Featured Project',
    architectureWorkflow: [
      { step: 1, title: 'Image Capture', desc: 'Raw document photo ingested into image processing buffer.' },
      { step: 2, title: 'Contour Detection', desc: 'Canny edge detection and polygon approximation isolate paper edges.' },
      { step: 3, title: 'Perspective Warp', desc: 'Four-point transform un-skews image into crystal-clear flat scan.' }
    ],
    filesSnippet: ['scanner.py', 'transform.py', 'filters.py'],
    visualTheme: 'slate'
  },
  {
    id: 'cyberrisk-ai',
    name: 'cyberrisk-ai',
    displayName: 'CyberRisk AI — Security Telemetry Hub',
    tagline: 'AI-assisted threat intelligence, exposure scoring, and remediation',
    description: 'Cybersecurity vulnerability audit dashboard calculating risk exposure indices and recommending prioritized mitigation steps for infrastructure.',
    overview: 'CyberRisk AI delivers actionable cybersecurity posture analysis for development teams, categorizing threat vectors and mapping vulnerabilities against standard compliance benchmarks.',
    problem: 'Software engineering teams frequently release deployments without visibility into configuration flaws or automated guidance on how to fix severe CVE exposures.',
    solution: 'Engineered an interactive vulnerability intelligence dashboard that ingests system audit data, calculates composite risk severity scores, and lists prescriptive remediation steps.',
    keyFeatures: [
      'Dynamic security health score visualizer with risk breakdown matrix',
      'Categorized CVE exposure tracking across frontend, backend, and network layers',
      'AI-driven mitigation recipes tailored to specific identified vulnerabilities',
      'Modern modular React user interface built on Vite'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/cyberrisk-ai',
    primaryLanguage: 'JavaScript',
    technologies: ['JavaScript', 'React', 'Vite', 'Cybersecurity', 'Risk Modeling', 'CSS3'],
    category: 'Python / AI',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-24',
    createdAt: '2026-03-24',
    featured: false,
    badgeText: 'Cyber Security',
    architectureWorkflow: [
      { step: 1, title: 'Telemetry Ingest', desc: 'Audit scanner ingests package manifests and port configurations.' },
      { step: 2, title: 'Threat Scoring', desc: 'Rule engine calculates CVSS risk scores and classifies exposure levels.' },
      { step: 3, title: 'Remediation Guide', desc: 'Dashboard generates prioritized patches and security hardening steps.' }
    ],
    filesSnippet: ['cyberrisk-ai/src/App.jsx', 'cyberrisk-ai/package.json', 'README.md'],
    visualTheme: 'cyan'
  },
  {
    id: 'flipkart-ui',
    name: 'Flipkart-UI',
    displayName: 'Flipkart E-Commerce Storefront Clone',
    tagline: 'Pixel-perfect responsive frontend recreation of Flipkart India',
    description: 'High-fidelity responsive UI replication of Flipkart storefront featuring deals carousels, category navigation grids, and shopping cart layout.',
    overview: 'A deep-dive responsive frontend study into one of India’s largest e-commerce platforms, replicating Flipkart’s complex responsive layouts, micro-interactions, and high-density product discovery cards.',
    problem: 'Mastering modern commercial UI engineering requires tackling complex responsive requirements, nested promotional grids, and product browsing across all device form factors.',
    solution: 'Built a pristine HTML5/CSS3 frontend faithfully recreating Flipkart’s brand styling, multi-tier navigation menus, promotional banner carousels, and shopping cart layouts.',
    keyFeatures: [
      'Responsive Flipkart navigation bar with search bar and user account dropdowns',
      'Category grid showcasing Electronics, Fashion, Appliances, and Grocery',
      'Featured deals carousel and best-seller product showcase cards',
      'Netlify deployment configuration with production assets included'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/Flipkart-UI',
    liveUrl: 'https://flipkart-ui-karthikeyasaidev.netlify.app',
    primaryLanguage: 'HTML',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Netlify'],
    category: 'UI / UX',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: false,
    badgeText: 'Storefront UI',
    architectureWorkflow: [
      { step: 1, title: 'DOM Hierarchy', desc: 'Semantic HTML5 structure for banner, category ribbon, and cards.' },
      { step: 2, title: 'CSS Grid & Flexbox', desc: 'Fluid media query breakpoints adapting from 360px mobile to 4K displays.' },
      { step: 3, title: 'Interactive States', desc: 'Active hover effects, cart badge incrementing, and category triggers.' }
    ],
    filesSnippet: ['index.html', 'netlify/index.html', 'netlify/Capture.PNG', 'netlify/Capture1.PNG'],
    visualTheme: 'amber'
  },
  {
    id: 'plastic2points',
    name: 'plastic2points',
    displayName: 'Plastic2Points — Circular Recycling Rewards Platform',
    tagline: 'Gamified plastic waste collection, deposit verification, and reward points exchange',
    description: 'Civic tech recycling web application incentivizing responsible plastic disposal through smart weight-based deposit logs, reward token calculations, and local partner redemption.',
    overview: 'Plastic2Points (developed as part of the Inno Yuva initiative) bridges environmental sustainability and community action by gamifying plastic waste recycling with verified point deposits and local vendor rewards.',
    problem: 'Urban communities struggle with low recycling participation rates due to a lack of immediate personal incentives and transparent collection tracking.',
    solution: 'Engineered a modern responsive web app where citizens log recyclables, track weight-based point earnings on dynamic dashboards, and redeem perks with local businesses.',
    keyFeatures: [
      'Instant weight-to-point conversion algorithm tailored for various recyclable plastic grades',
      'Citizen rewards dashboard with collection streak counts and milestone tier badges',
      'Partner vendor marketplace for coupon and voucher redemption',
      'Responsive mobile-first user interface built on Vite and React'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/plastic2points',
    primaryLanguage: 'JavaScript',
    technologies: ['JavaScript', 'React', 'Vite', 'Tailwind CSS', 'Civic Tech', 'Sustainability'],
    category: 'Frontend',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-24',
    createdAt: '2026-02-10',
    featured: true,
    badgeText: 'Inno Yuva',
    architectureWorkflow: [
      { step: 1, title: 'Deposit Logging', desc: 'User enters plastic item category, grade, and verified collection weight.' },
      { step: 2, title: 'Point Computation', desc: 'Algorithm calculates earned recycling points and credits user profile.' },
      { step: 3, title: 'Perk Redemption', desc: 'Tokens redeemed for community perks, discounts, and civic eco-badges.' }
    ],
    filesSnippet: ['src/App.jsx', 'src/components/Dashboard.jsx', 'package.json', 'README.md'],
    visualTheme: 'emerald'
  },
  {
    id: 'yourinnovator',
    name: 'Yourinnovator-',
    displayName: 'YourInnovator — Course & Project Platform',
    tagline: 'Modern project incubator and structured engineering curriculum portal',
    description: 'Next.js 15 web application enabling engineering students to explore innovation tracks, enroll in modules, and submit project assignments.',
    overview: 'YourInnovator is a Next.js educational portal built to guide students through real-world software engineering projects with progressive milestones and asset submission capabilities.',
    problem: 'Aspiring creators lack structured guidance and practical pipelines for building and demonstrating engineering projects from concept to deployment.',
    solution: 'Developed a full-stack Next.js web application with App Router architecture, supporting multi-course catalogs, student enrollment workflows, and file uploads.',
    keyFeatures: [
      'Built on Next.js 15 App Router with full TypeScript type safety',
      'Modular curriculum structure with milestone tracking and assignment submissions',
      'Custom Tailwind styling and responsive layout primitives',
      'Configured for high-performance edge deployment on Netlify'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/Yourinnovator-',
    primaryLanguage: 'TypeScript',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Netlify', 'Node.js'],
    category: 'Full Stack',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: false,
    badgeText: 'Next.js 15',
    architectureWorkflow: [
      { step: 1, title: 'Next.js App Router', desc: 'Server and client components render fast dynamic course pages.' },
      { step: 2, title: 'Milestone Pipeline', desc: 'Students complete progressive code modules and upload submissions.' },
      { step: 3, title: 'Asset Processing', desc: 'Static and user uploads handled via secure Netlify hosting pipeline.' }
    ],
    filesSnippet: ['package.json', 'next.config.ts', 'netlify.toml', 'CLAUDE.md'],
    visualTheme: 'brown'
  },
  {
    id: 'yourinnovator-p1',
    name: 'yourinnovator-P1',
    displayName: 'YourInnovator Course Platform (P1)',
    tagline: 'Initial Next.js architecture and course management foundation',
    description: 'Foundation phase of the YourInnovator educational system featuring curriculum hierarchy, assignment upload handlers, and Next.js primitives.',
    overview: 'The initial engineering milestone of YourInnovator, laying down core data structures, student routing patterns, and assignment submission architecture.',
    problem: 'Developing a scalable course platform requires solid component foundations, asset upload pipelines, and clean routing conventions.',
    solution: 'Implemented the primary course catalog, responsive navigation layouts, and asset management micro-handlers in Next.js 15.',
    keyFeatures: [
      'Modular course catalog layout with category filters',
      'Asset upload handler configuration for project assignments',
      'Strict TypeScript configuration and ESLint code standards',
      'Clean separation between layout templates and dynamic view pages'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/yourinnovator-P1',
    primaryLanguage: 'TypeScript',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'PostCSS'],
    category: 'Full Stack',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: false,
    badgeText: 'Phase 1 Core',
    architectureWorkflow: [
      { step: 1, title: 'Course Routing', desc: 'Dynamic route segments resolve specific course IDs and module slugs.' },
      { step: 2, title: 'Component Tree', desc: 'Modular components render video players, lesson checklists, and notes.' }
    ],
    filesSnippet: ['course-platform - Copy/next.config.ts', 'course-platform - Copy/package.json'],
    visualTheme: 'slate'
  },
  {
    id: 'studentconnect',
    name: 'studentconnect',
    displayName: 'StudentConnect — Campus Collaboration & Resource Hub',
    tagline: 'Academic networking, study group matchmaking, and campus resource exchange',
    description: 'Campus collaboration platform connecting university students for peer mentoring, project partner matching, shared academic notes, and campus hackathon team formation.',
    overview: 'StudentConnect is an integrated academic community portal built to empower university students to discover peer collaborators, share verified lecture notes, and assemble multidisciplinary project squads.',
    problem: 'Engineering students often struggle to find complementary team members with specific technical skills for hackathons, coursework, and practical projects.',
    solution: 'Constructed an interactive web portal featuring skill-filtered student profiles, collaborative study circles, and verified departmental coursework libraries.',
    keyFeatures: [
      'Skill-based collaborator matching for engineering projects and hackathons',
      'Departmental study note and past examination paper repository',
      'Real-time discussion circles and announcement board for campus tech events',
      'Secure authentication and responsive student profile dashboards'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/studentconnect',
    primaryLanguage: 'JavaScript',
    technologies: ['JavaScript', 'React', 'Vite', 'Firebase', 'Tailwind CSS', 'Node.js'],
    category: 'Full Stack',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-23',
    createdAt: '2026-01-20',
    featured: false,
    badgeText: 'Campus Platform',
    architectureWorkflow: [
      { step: 1, title: 'Profile Setup', desc: 'Student selects branch, graduation year, and technical skill tags.' },
      { step: 2, title: 'Match Discovery', desc: 'Search engine queries complementary peers for hackathons or study teams.' },
      { step: 3, title: 'Collaboration Space', desc: 'Teams coordinate tasks, share files, and collaborate in shared spaces.' }
    ],
    filesSnippet: ['src/App.jsx', 'scripts/seedDatabase.js', 'package.json', 'README.md'],
    visualTheme: 'teal'
  },
  {
    id: 'skyfit',
    name: 'skyfit',
    displayName: 'SkyFit — Responsive Fitness & Gym Hub',
    tagline: 'Dynamic gym training portal with integrated BMI health calculator',
    description: 'Modern health and wellness portal featuring responsive class schedules, membership pricing tiers, trainer profiles, and an interactive BMI calculator.',
    overview: 'SkyFit provides health club members and fitness seekers with an energizing digital home to explore training regimens, calculate personal health indices, and enroll in workout tiers.',
    problem: 'Fitness websites often suffer from confusing navigation and lack interactive tools that offer immediate value to prospective gym members.',
    solution: 'Constructed an engaging, high-performance responsive website featuring an instant BMI calculator, program cards (Cardio, Weightlifting, Yoga), and smooth mobile navigation.',
    keyFeatures: [
      'Interactive Body Mass Index (BMI) calculator with immediate weight status feedback',
      'Curated program schedule showcases for cardio, bodybuilding, and endurance',
      'Responsive sticky header navigation with smooth-scroll section anchors',
      'Transparent tiered pricing table with membership perk breakdowns'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/skyfit',
    primaryLanguage: 'CSS',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'UI/UX'],
    category: 'Frontend',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: false,
    badgeText: 'Fitness App',
    architectureWorkflow: [
      { step: 1, title: 'User Input', desc: 'Member inputs height in cm and weight in kg into calculator.' },
      { step: 2, title: 'BMI Calculation', desc: 'JS algorithm computes exact BMI score and health classification.' },
      { step: 3, title: 'Program Matching', desc: 'Portal highlights ideal workout schedule based on personal targets.' }
    ],
    filesSnippet: ['responsive-gym-website-main/assets/css/styles.css', 'responsive-gym-website-main/assets/img'],
    visualTheme: 'emerald'
  },
  {
    id: 'learnearn',
    name: 'LearnEarn',
    displayName: 'LearnEarn — Gamified Skill Development',
    tagline: 'Incentivized student learning platform with reward milestones',
    description: 'Interactive EdTech portal incentivizing students to master coding concepts through gamified challenges, streak tallies, and redeemable milestone perks.',
    overview: 'LearnEarn transforms technical education into an engaging journey by pairing educational coursework with rewarding gamification loops and milestone badges.',
    problem: 'Self-directed online learners frequently drop out of programming courses due to a lack of immediate incentive and tangible recognition.',
    solution: 'Built a responsive React web application that awards achievement points for every completed lesson, visualizing student streaks and leaderboard progress.',
    keyFeatures: [
      'Gamified learning paths across programming and data science topics',
      'Streak counter and achievement milestone badge showcase',
      'Vite + React single page application with instant page transitions',
      'Interactive challenge cards with progress status tracking'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/LearnEarn',
    primaryLanguage: 'JavaScript',
    technologies: ['JavaScript', 'React', 'Vite', 'CSS3', 'HTML5'],
    category: 'Frontend',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-24',
    createdAt: '2026-03-24',
    featured: false,
    badgeText: 'Gamified EdTech',
    architectureWorkflow: [
      { step: 1, title: 'Lesson Drill', desc: 'Learner completes coding drill and submits test output.' },
      { step: 2, title: 'XP Calculation', desc: 'System calculates earned experience points and increments streak.' },
      { step: 3, title: 'Badge Unlock', desc: 'Achievement badge unlocked and added to user profile trophy case.' }
    ],
    filesSnippet: ['package.json', 'index.html', 'dist/assets', 'README.md'],
    visualTheme: 'amber'
  },
  {
    id: 'zomato-c',
    name: 'ZOMATO-Applications-Working-Model-in-C-Language',
    displayName: 'Zomato Operations Engine in C',
    tagline: 'Terminal-based food delivery ordering simulation in pure C',
    description: 'Algorithmic console application simulating end-to-end food ordering: restaurant catalog, dynamic cart calculation, tax computations, and delivery simulation.',
    overview: 'A robust systems programming project implemented in C that models the core transactional workflow of food aggregator platforms like Zomato entirely within a command-line environment.',
    problem: 'Demonstrating solid programming fundamentals requires understanding procedural state management, structured memory, arrays, and interactive terminal I/O.',
    solution: 'Designed an interactive C application featuring restaurant menus, cart arrays, tax and delivery surcharge algorithms, and animated console order confirmation.',
    keyFeatures: [
      'Multi-restaurant catalog with categorized appetizers, main courses, and desserts',
      'Dynamic bill computation incorporating subtotal, GST tax, and delivery fee',
      'Robust terminal input sanitization preventing buffer overruns and invalid choices',
      'Detailed simulated dispatch invoice showing estimated delivery time'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/ZOMATO-Applications-Working-Model-in-C-Language',
    primaryLanguage: 'C',
    technologies: ['C', 'Data Structures', 'Procedural Algorithms', 'Console I/O', 'Memory Layout'],
    category: 'C / Systems',
    stars: 1,
    forks: 0,
    updatedAt: '2026-08-10',
    createdAt: '2025-12-20',
    featured: false,
    badgeText: 'Systems / C',
    architectureWorkflow: [
      { step: 1, title: 'Menu Navigation', desc: 'Customer selects restaurant code and browses categorized dish prices.' },
      { step: 2, title: 'Cart Aggregation', desc: 'C struct arrays accumulate items, quantities, and line item costs.' },
      { step: 3, title: 'Receipt Generation', desc: 'Formatted invoice generated with itemized breakdown and delivery ETA.' }
    ],
    filesSnippet: ['Zomato in C language'],
    visualTheme: 'rose'
  },
  {
    id: 'irctc-using-java',
    name: 'IRCTC-using-JAVA',
    displayName: 'IRCTC Railway Reservation System in Java',
    tagline: 'Object-oriented passenger ticket booking and coach allotment engine',
    description: 'Java enterprise simulator replicating Indian Railways reservation operations: route scheduling, seat classes, PNR generation, and cancellation refunds.',
    overview: 'An object-oriented simulation of India’s railway ticketing infrastructure, modeling complex passenger reservation rules, coach seat inventories, and PNR ticket lifecycle management in Java.',
    problem: 'Railway reservation systems entail intricate domain constraints including multi-class coach quotas, waitlisting rules, and strict cancellation penalty calculations.',
    solution: 'Architected an extensible Java application using OOP principles (Inheritance, Polymorphism, Encapsulation) to model Trains, Coaches, Berths, Passengers, and Tickets.',
    keyFeatures: [
      'Train schedule and route query across originating and destination stations',
      'Seat availability logic supporting Sleeper (SL), 3AC, 2AC, and First Class',
      'Unique 10-digit PNR ticket issuance algorithm with passenger booking state',
      'Cancellation processing calculating time-dependent refund deductions'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/IRCTC-using-JAVA',
    primaryLanguage: 'Java',
    technologies: ['Java', 'OOP', 'Collections Framework', 'Data Modeling', 'Algorithms'],
    category: 'Java',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: false,
    badgeText: 'Core Java',
    architectureWorkflow: [
      { step: 1, title: 'Route Search', desc: 'User inputs source and destination stations to retrieve train schedules.' },
      { step: 2, title: 'Coach Quota Check', desc: 'Java collections evaluate remaining berth inventory for requested class.' },
      { step: 3, title: 'PNR Issuance', desc: 'Ticket object instantiated with unique PNR and passenger details printed.' }
    ],
    filesSnippet: ['IRCTC.java', 'Passenger.java', 'Train.java', 'BookingManager.java'],
    visualTheme: 'indigo'
  },
  {
    id: 'atm-using-c',
    name: 'ATM-using-c',
    displayName: 'ATM Banking Operations Simulator in C',
    tagline: 'Secure PIN authentication and cash dispenser simulator',
    description: 'High-precision banking simulation in C executing PIN verification, cash withdrawals, balance inquiries, deposit logging, and mini-statement generation.',
    overview: 'A foundational systems software project modeling an automated teller machine (ATM), focusing on secure transactions, denomination management, and state integrity.',
    problem: 'Financial transaction software demands zero-tolerance for arithmetic errors, unauthorized withdrawals beyond balance limits, and insecure state mutations.',
    solution: 'Crafted a procedural C program with PIN verification limits, denomination boundary checks, instant ledger updates, and printed terminal receipt statements.',
    keyFeatures: [
      'PIN authentication routine with 3-attempt safety lockout protocol',
      'Cash withdrawal with balance validation and denomination dispense logic',
      'Account deposit facility with instant balance ledger synchronization',
      'Formatted transaction receipt and mini-statement output'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/ATM-using-c',
    primaryLanguage: 'C',
    technologies: ['C', 'Procedural Programming', 'Banking Algorithms', 'Input Validation'],
    category: 'C / Systems',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: false,
    badgeText: 'Systems / C',
    architectureWorkflow: [
      { step: 1, title: 'Card PIN Auth', desc: 'User enters 4-digit PIN against stored account credentials.' },
      { step: 2, title: 'Transaction Dispatch', desc: 'User selects Withdraw, Deposit, or Balance Check operation.' },
      { step: 3, title: 'Ledger Commit', desc: 'Balance validated and updated in memory with printed transaction receipt.' }
    ],
    filesSnippet: ['Atm in c.txt'],
    visualTheme: 'slate'
  },
  {
    id: 'c-project',
    name: 'c-project',
    displayName: 'Coffee Hub Management System in C',
    tagline: 'Point-of-sale and beverage inventory system for cafes',
    description: 'Terminal POS and inventory management system in C for specialty coffee shops, handling customer beverage orders, recipes, invoices, and sales tallies.',
    overview: 'The Coffee Hub Management System is an end-to-end cafe operations software developed in C, covering order intake, recipe calculation, and daily sales auditing.',
    problem: 'Small cafes need lightweight, reliable billing and stock auditing without requiring complex internet-dependent POS hardware.',
    solution: 'Engineered a standalone C application that records orders, calculates itemized bills with custom add-ons, and tracks remaining ingredient supplies.',
    keyFeatures: [
      'Coffee ordering menu with customizations (shots, milk alternatives, syrups)',
      'Instant itemized receipt printing formatted for terminal output',
      'Ingredient stock monitoring for espresso beans, milk, and specialty flavors',
      'End-of-day sales register report summarizing daily revenue'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/c-project',
    primaryLanguage: 'C',
    technologies: ['C', 'Console POS', 'Inventory Management', 'Procedural Code'],
    category: 'C / Systems',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: false,
    badgeText: 'Cafe POS',
    architectureWorkflow: [
      { step: 1, title: 'Order Intake', desc: 'Barista enters customer beverage choices and specialty add-ons.' },
      { step: 2, title: 'Bill Calculation', desc: 'Program computes tax, totals, and formats clean receipt string.' },
      { step: 3, title: 'Stock Deduction', desc: 'Ingredient counts decremented in memory to prevent supply stockouts.' }
    ],
    filesSnippet: ['zomato working with C'],
    visualTheme: 'amber'
  },
  {
    id: 'skillbridge-p1',
    name: 'SkillBridge-P1',
    displayName: 'SkillBridge Foundation (P1)',
    tagline: 'Early architecture and backend REST service for mentorship',
    description: 'Initial architectural milestone of SkillBridge including Node.js REST server, Firebase Admin configuration, and client interface scaffolding.',
    overview: 'The foundational iteration of the SkillBridge mentorship ecosystem, testing initial API routes, Firebase Admin database security rules, and client setup.',
    problem: 'Establishing a secure, scalable mentorship platform requires building tested authentication layers and reliable database connectivity before AI integration.',
    solution: 'Built an Express.js backend with Firebase Admin SDK, enabling secure user profile persistence and API endpoint testing.',
    keyFeatures: [
      'Express.js HTTP server architecture with modular routing',
      'Firebase Admin SDK initialization with service account configuration',
      'User profile data persistence and role definitions (Mentor vs Mentee)',
      'Netlify deployment configuration for web client'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/SkillBridge-P1',
    primaryLanguage: 'JavaScript',
    technologies: ['JavaScript', 'Node.js', 'Express', 'Firebase Admin', 'REST APIs'],
    category: 'Backend',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-19',
    createdAt: '2026-03-19',
    featured: false,
    badgeText: 'Backend API',
    architectureWorkflow: [
      { step: 1, title: 'Express Gateway', desc: 'Incoming HTTP requests authenticated via middleware tokens.' },
      { step: 2, title: 'Firebase Admin', desc: 'Validated records written to Firestore with security rules applied.' }
    ],
    filesSnippet: ['backend/server.js', 'backend/firebase-service-account.json', 'frontend/netlify.toml'],
    visualTheme: 'teal'
  },
  {
    id: 'gramsetu-prototype2',
    name: 'GramSetu-prototype2',
    displayName: 'Gram Setu — Digital Village Services (Phase 2)',
    tagline: 'Expanded rural telemedicine, agriculture alerts, and welfare portal',
    description: 'Phase 2 evolution of the Gram Setu rural portal incorporating agricultural commodity price updates, Panchayat notice boards, and enhanced telemedicine.',
    overview: 'Building upon the hackathon-winning foundation of Gram Setu, Prototype 2 expands the platform into a comprehensive digital village ecosystem.',
    problem: 'Rural farmers and citizens frequently miss out on timely government crop price advisories and critical welfare registration deadlines.',
    solution: 'Enhanced the portal architecture with dedicated agricultural market tickers, official village council notice broadcasts, and simplified welfare application forms.',
    keyFeatures: [
      'Agricultural crop market price bulletin tailored for regional mandis',
      'Panchayat official notice board for public announcements and meetings',
      'Simplified citizen welfare scheme application workflow',
      'Enhanced offline caching for inconsistent village connectivity'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/GramSetu-prototype2',
    primaryLanguage: 'JavaScript',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Rural ICT', 'Web APIs'],
    category: 'Full Stack',
    stars: 0,
    forks: 0,
    updatedAt: '2026-03-24',
    createdAt: '2026-03-24',
    featured: false,
    badgeText: 'Phase 2 Expansion',
    architectureWorkflow: [
      { step: 1, title: 'Panchayat Portal', desc: 'Admin posts new crop subsidies or vaccination camp schedule.' },
      { step: 2, title: 'Localized Broadcast', desc: 'Notice published in native regional language with audio option.' }
    ],
    filesSnippet: ['README.md', 'index.html'],
    visualTheme: 'emerald'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    displayName: 'Amazon E-Commerce Architecture Prototype',
    tagline: 'Multi-vendor marketplace schema and checkout flow exploration',
    description: 'Exploration of large-scale e-commerce architecture modeling Amazon’s product variant hierarchies, review rating mechanisms, and checkout flows.',
    overview: 'An architectural analysis of enterprise e-commerce systems, exploring data structures for multi-vendor product listings, variant matrices, and shopping cart persistence.',
    problem: 'Enterprise shopping portals require managing thousands of product variations (sizes, colors, sellers, stock) while preserving instantaneous page loads.',
    solution: 'Constructed an architectural schema model demonstrating product catalog categorization, seller pricing comparisons, and multi-step order checkout flows.',
    keyFeatures: [
      'Multi-variant product catalog schema (size, color, condition, seller)',
      'Customer rating and verified purchase review breakdown matrix',
      'Persistent shopping cart state and order summary calculation',
      'Responsive design patterns for dense e-commerce product pages'
    ],
    githubUrl: 'https://github.com/karthikeyasai61-dev/Amazon',
    primaryLanguage: 'HTML',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'E-Commerce Architecture', 'UI/UX'],
    category: 'UI / UX',
    stars: 0,
    forks: 0,
    updatedAt: '2026-08-08',
    createdAt: '2026-08-08',
    featured: false,
    badgeText: 'Catalog Architecture',
    architectureWorkflow: [
      { step: 1, title: 'Catalog Lookup', desc: 'Product variations indexed with real-time inventory counts.' },
      { step: 2, title: 'Checkout Matrix', desc: 'Order subtotal, shipping choices, and payment modes calculated.' }
    ],
    filesSnippet: ['index.html', 'style.css'],
    visualTheme: 'slate'
  }
];

export const HACKATHONS_DATA: HackathonItem[] = [
  {
    id: 'bvc-hackathon',
    order: '01',
    name: 'BVC College Hackathon',
    organization: 'BVC College of Engineering',
    status: '3rd Prize',
    isAward: true,
    badge: '🥉 3rd Prize',
    experienceText: 'This was my first hackathon experience.',
    summary: 'First hackathon experience — engineered an impactful real-world software prototype, securing the prestigious 3rd Prize award.',
    projectLink: 'https://github.com/karthikeyasai61-dev/GramSetu-prototype1'
  },
  {
    id: 'andhra-university-hackathon',
    order: '02',
    name: 'Andhra University Hackathon',
    organization: 'Andhra University',
    status: 'Participated',
    isAward: false,
    badge: 'Participated',
    experienceText: 'Second hackathon experience.',
    summary: 'Second hackathon journey, tackling university-level technical challenges in algorithmic problem-solving and rapid software prototyping.'
  },
  {
    id: 'adobe-hackathon',
    order: '03',
    name: 'Adobe Hackathon',
    organization: 'Adobe',
    status: 'Participated',
    isAward: false,
    badge: 'Participated',
    experienceText: 'Third hackathon experience.',
    summary: 'Third hackathon journey, engaging in creative problem-solving, UI/UX thinking, and modern software tooling challenges.'
  },
  {
    id: 'google-developer-hackathon',
    order: '04',
    name: 'Google Developer Hackathon',
    organization: 'Google Developers',
    status: 'Participated',
    isAward: false,
    badge: 'Participated',
    experienceText: 'Fourth hackathon experience.',
    summary: 'Fourth hackathon journey, building community-focused solutions leveraging modern developer technologies and scalable APIs.'
  },
  {
    id: 'godavari-global-university-hackathon',
    order: '05',
    name: 'Godavari Global University Hackathon',
    organization: 'Godavari Global University',
    status: 'Participated',
    isAward: false,
    badge: 'Participated',
    experienceText: 'Fifth hackathon experience.',
    summary: 'Fifth hackathon journey, collaborating on institutional software challenges and peer developer problem-solving.'
  },
  {
    id: 'ibm-national-hackathon',
    order: '06',
    name: 'IBM National Hackathon',
    organization: 'IBM',
    status: 'Participated',
    isAward: false,
    badge: 'Participated',
    experienceText: 'Sixth hackathon experience.',
    summary: 'Sixth hackathon journey, participating in nationwide enterprise engineering, data modeling, and architectural challenge tracks.'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '3rd Prize — BVC College Hackathon',
    role: 'Winner',
    event: 'BVC College Hackathon',
    date: 'March 2026',
    badge: '3rd Prize',
    description: 'Awarded 3rd Prize in competitive hackathon for engineering Gram Setu, a digital governance portal bridging village administration with multilingual communication and telehealth.',
    verified: true,
    projectLink: 'https://github.com/karthikeyasai61-dev/GramSetu-prototype1'
  },
  {
    title: 'Andhra University Hackathon',
    role: 'Participated',
    event: 'Andhra University Hackathon',
    date: '2025',
    badge: 'Participated',
    description: 'Second hackathon experience — tackled university-level software problems in rapid development.',
    verified: true
  },
  {
    title: 'Adobe Hackathon',
    role: 'Participated',
    event: 'Adobe Hackathon',
    date: '2025',
    badge: 'Participated',
    description: 'Third hackathon experience — explored creative digital interfaces and software product innovation.',
    verified: true
  },
  {
    title: 'Google Developer Hackathon',
    role: 'Participated',
    event: 'Google Developers',
    date: '2025 – 2026',
    badge: 'Participated',
    description: 'Fourth hackathon experience — competed in fast-paced software hackathon solving community challenges using modern web technologies.',
    verified: true
  },
  {
    title: 'Godavari Global University Hackathon',
    role: 'Participated',
    event: 'Godavari Global University',
    date: '2025',
    badge: 'Participated',
    description: 'Fifth hackathon experience — participated in campus-wide technical problem-solving with fellow engineers.',
    verified: true
  },
  {
    title: 'IBM National Hackathon',
    role: 'Participated',
    event: 'IBM National Hackathon',
    date: '2025',
    badge: 'Participated',
    description: 'Sixth hackathon experience — participated in intense national problem-solving hackathon focused on enterprise engineering.',
    verified: true
  },
  {
    title: 'Academic Excellence (CGPA 9.0)',
    role: 'Academic',
    event: 'Godavari Global University',
    date: '2023 – Present',
    badge: 'Top Tier CGPA',
    description: 'Consistently maintaining a 9.0 CGPA in B.Tech Computer Science (Data Science) across core subjects including Data Structures, Algorithms, DBMS, and OOP.',
    verified: true
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    description: 'Core languages utilized across production repositories and algorithmic problem solving.',
    skills: [
      { name: 'Python', level: 'Proficient', projectsUsedIn: ['PicScan-P1', 'CyberRisk AI', 'Data Science Drills'] },
      { name: 'Java', level: 'Proficient', projectsUsedIn: ['IRCTC-using-JAVA', 'OOP & Data Structures'] },
      { name: 'C', level: 'Advanced Systems', projectsUsedIn: ['ZOMATO Model in C', 'ATM Simulator', 'Coffee Hub POS'] },
      { name: 'JavaScript (ES6+)', level: 'Advanced', projectsUsedIn: ['SkillBridge-P2', 'CyberRisk AI', 'Gram Setu', 'Plastic2Points'] },
      { name: 'TypeScript', level: 'Proficient', projectsUsedIn: ['SkillUp-AI', 'bloodconnect', 'Yourinnovator-', 'Sensovec'] },
      { name: 'HTML5 & CSS3', level: 'Advanced', projectsUsedIn: ['Flipkart-UI', 'skyfit', 'Portfolio'] }
    ]
  },
  {
    category: 'Frontend & UI Frameworks',
    description: 'Component architecture, responsive layouts, accessible design, and reactive state.',
    skills: [
      { name: 'React', level: 'Advanced', projectsUsedIn: ['SkillUp-AI', 'bloodconnect', 'LearnEarn', 'Sensovec', 'Plastic2Points', 'Portfolio'] },
      { name: 'Next.js 15', level: 'Proficient', projectsUsedIn: ['Yourinnovator-', 'yourinnovator-P1'] },
      { name: 'Vite', level: 'Advanced', projectsUsedIn: ['SkillUp-AI', 'cyberrisk-ai', 'Plastic2Points', 'Portfolio'] },
      { name: 'Tailwind CSS', level: 'Proficient', projectsUsedIn: ['bloodconnect', 'Yourinnovator-', 'SkillUp-AI', 'Sensovec'] },
      { name: 'Radix UI Primitives', level: 'Proficient', projectsUsedIn: ['bloodconnect'] },
      { name: 'Responsive Web Design', level: 'Expert', projectsUsedIn: ['Flipkart-UI', 'skyfit', 'Gram Setu'] }
    ]
  },
  {
    category: 'Backend & Data Layers',
    description: 'Server development, REST API design, database schemas, and cloud services.',
    skills: [
      { name: 'Node.js & Express', level: 'Proficient', projectsUsedIn: ['SkillBridge-P1', 'SkillBridge-P2', 'Sensovec'] },
      { name: 'Firebase Admin & Auth', level: 'Proficient', projectsUsedIn: ['SkillBridge-P1', 'SkillBridge-P2', 'StudentConnect'] },
      { name: 'Drizzle ORM', level: 'Proficient', projectsUsedIn: ['bloodconnect'] },
      { name: 'RESTful API Engineering', level: 'Advanced', projectsUsedIn: ['Gram Setu', 'SkillBridge-P2', 'SkillUp-AI', 'Sensovec'] },
      { name: 'Nodemailer Dispatch', level: 'Proficient', projectsUsedIn: ['SkillBridge-P2'] }
    ]
  },
  {
    category: 'Data Science & Artificial Intelligence',
    description: 'Applied machine learning, generative AI integrations, and computer vision.',
    skills: [
      { name: 'Data Science & Analytics', level: 'Degree Specialization', projectsUsedIn: ['B.Tech Curriculum', 'Data Modeling'] },
      { name: 'Google Gemini AI Integration', level: 'Proficient', projectsUsedIn: ['SkillBridge-P2'] },
      { name: 'Computer Vision & Image Processing', level: 'Proficient', projectsUsedIn: ['PicScan-P1'] },
      { name: 'Security Telemetry & Risk Scoring', level: 'Proficient', projectsUsedIn: ['CyberRisk AI'] }
    ]
  },
  {
    category: 'Tools & Workflow',
    description: 'Version control, deployment pipelines, testing, and modern developer tooling.',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', projectsUsedIn: ['All 21 Projects & Repositories', 'Branch Workflows'] },
      { name: 'Netlify Deployments', level: 'Proficient', projectsUsedIn: ['Flipkart-UI', 'SkillBridge', 'Yourinnovator-'] },
      { name: 'Postman & API Testing', level: 'Proficient', projectsUsedIn: ['SkillBridge Backend Tests'] },
      { name: 'Linux / Windows Tooling', level: 'Proficient', projectsUsedIn: ['C Toolchains', 'Node Runtimes'] }
    ]
  }
];

export const PROFILE_INFO = {
  name: 'Adapa Karthikeya Sai',
  title: 'Full-Stack Developer | Data Science Engineering Student',
  institution: 'Godavari Global University',
  degree: 'B.Tech in Computer Science and Engineering (Data Science)',
  cgpa: '9.0',
  stage: '3rd Year Undergraduate',
  location: 'Andhra Pradesh, India',
  github: 'https://github.com/karthikeyasai61-dev',
  githubUsername: 'karthikeyasai61-dev',
  linkedin: 'https://www.linkedin.com/in/karthikeya-sai-adapa-b1b48733b',
  email: 'karthikeyasai61.dev@gmail.com',
  summary: 'Computer Science student focused on full-stack development, modern interfaces, data-driven applications, and practical problem solving. Passionate about building functional digital products that solve real community and technical challenges.',
  statement: 'I build ideas into usable digital products.'
};

export const INITIAL_PROJECTS = ALL_PROJECTS;
