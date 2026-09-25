export const services = [
  {
    slug: 'web-design',
    title: 'Experience Design',
    description: 'Premium websites, conversion-focused landing pages, and polished interface systems built around real customer journeys.',
    icon: 'Sparkles',
    metric: '+42% conversion lift',
  },
  {
    slug: 'branding',
    title: 'Brand Strategy',
    description: 'Naming, positioning, identity, messaging, and launch systems that make ambitious companies look unmistakable.',
    icon: 'PenTool',
    metric: '12-week brand sprints',
  },
  {
    slug: 'development',
    title: 'Web Development',
    description: 'Fast, scalable, and maintainable builds with modern stacks, CMS integration, analytics, and technical SEO.',
    icon: 'Code2',
    metric: '95+ Lighthouse scores',
  },
  {
    slug: 'marketing',
    title: 'Growth Systems',
    description: 'Funnels, campaigns, automation, content engines, and performance dashboards for measurable growth.',
    icon: 'TrendingUp',
    metric: '3.8x average ROAS',
  },
];

export const testimonials = [
  {
    text: 'They translated a messy offer into a premium brand and a website that finally sells the value of our product.',
    author: 'Jane Cooper',
    role: 'CEO, TechCorp',
    company: 'TechCorp',
  },
  {
    text: 'The level of polish, speed, and strategic thinking was far beyond a normal agency engagement.',
    author: 'John Smith',
    role: 'Founder, FinFlow',
    company: 'FinFlow',
  },
  {
    text: 'We launched with a site that looked enterprise-grade from day one and converted better in the first month.',
    author: 'Maya Patel',
    role: 'CMO, ShopNext',
    company: 'ShopNext',
  },
];

export const stats = [
  { value: '150+', label: 'Projects shipped' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '$42M+', label: 'Revenue influenced' },
  { value: '12', label: 'Awards won' },
];

export const logos = ['Northstar', 'FinFlow', 'ShopNext', 'Cloudora', 'Velora'];

export const process = [
  { step: '01', title: 'Discover', description: 'We audit your market, customer, product, and conversion gaps before touching pixels.' },
  { step: '02', title: 'Design', description: 'We craft a sharp visual system, key pages, UX flows, and sales-focused messaging.' },
  { step: '03', title: 'Build', description: 'We turn the approved system into a fast, responsive, production-ready experience.' },
  { step: '04', title: 'Launch', description: 'We connect analytics, optimize details, and support the rollout after launch.' },
];

export interface Project {
  slug: string;
  title: string;
  category: 'Web Design' | 'Branding' | 'Development' | 'Marketing';
  client: string;
  year: string;
  featured: boolean;
  metric: string;
  shortDescription: string;
  description: string;
  tags: string[];
  image: string;
  challenge: string;
  solution: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    slug: 'apex-finance',
    title: 'Apex Global Finance',
    category: 'Web Design',
    client: 'Apex Capital Partners',
    year: '2024',
    featured: true,
    metric: '+148% lead conversion',
    shortDescription: 'A next-generation financial portal and brand experience engineered for institutional and high-net-worth investors.',
    description: 'Apex Capital needed a total digital overhaul to reflect their leadership in institutional asset management. We designed an immersive, data-dense interface that translates complex portfolio intelligence into intuitive visual narratives.',
    tags: ['UX/UI Design', 'Design System', 'FrontAlign', 'Fintech'],
    image: 'https://picsum.photos/seed/apex-fintech/1200/800',
    challenge: "The client's legacy platform suffered from cumbersome navigation, slow page loads, and outdated brand perception that deterred institutional prospects.",
    solution: 'We overhauled the information architecture, crafted an enterprise design system with accessible data visualizations, and optimized performance for global load times under 1 second.',
    outcome: 'A 148% surge in qualified discovery calls within 90 days of launch, and recognition by Awwwards for Best Financial Experience.',
  },
  {
    slug: 'lumina-brand',
    title: 'Lumina Studio Identity',
    category: 'Branding',
    client: 'Lumina Architectural Labs',
    year: '2024',
    featured: true,
    metric: '3.4x brand recall',
    shortDescription: 'Complete brand positioning, identity guidelines, typography systems, and launch campaign for a premier Nordic architecture firm.',
    description: 'Lumina crafts sustainable, light-infused residential and commercial structures across Scandinavia. We created an understated, tactile visual identity that embodies their philosophy of spatial serenity and sustainable luxury.',
    tags: ['Brand Identity', 'Art Direction', 'Print & Packaging', 'Typography'],
    image: 'https://picsum.photos/seed/lumina-brand/1200/800',
    challenge: 'Lumina was expanding internationally and needed a brand identity that felt timeless across physical monographs, architectural tenders, and digital exhibitions.',
    solution: 'We developed a bespoke logomark, typographic hierarchy with custom numerals, and minimalist print collateral using carbon-neutral textured papers.',
    outcome: 'Lumina successfully secured $48M in international commissions during the first two quarters following the identity rollout.',
  },
  {
    slug: 'velocity-cloud',
    title: 'Velocity Cloud Infrastructure',
    category: 'Development',
    client: 'Velocity Systems',
    year: '2024',
    featured: false,
    metric: '98 Lighthouse, <1s load',
    shortDescription: 'Ultra-fast headless web application and documentation portal built with Nuxt 3, edge computing, and real-time telemetry.',
    description: 'Velocity provides distributed serverless infrastructure for developers. They needed a lightning-fast technical landing ecosystem, interactive CLI simulation, and robust developer documentation.',
    tags: ['Nuxt 3', 'TypeScript', 'Edge API', 'Technical SEO'],
    image: 'https://picsum.photos/seed/velocity-cloud/1200/800',
    challenge: 'Developer audiences demand absolute speed and zero visual fluff. The existing site struggled with bloated client bundles and poor SEO indexing.',
    solution: 'We engineered a static edge-cached platform with interactive sandbox playgrounds, instant search indexing, and a clean monospace-accented UI.',
    outcome: 'Developer signups doubled in month one, with average page load speeds decreasing by 68% across all continents.',
  },
  {
    slug: 'kura-coffee',
    title: 'Kura Single-Origin Coffee',
    category: 'Marketing',
    client: 'Kura Roasters Co.',
    year: '2023',
    featured: false,
    metric: '4.2x ROAS, +84% retention',
    shortDescription: 'Direct-to-consumer ecommerce growth strategy, storytelling subscription funnels, and retention email marketing.',
    description: 'Kura partners directly with micro-lot coffee farmers in Ethiopia and Colombia. We designed a customer journey that educates buyers on origin profiles and converts one-time buyers into loyal monthly subscribers.',
    tags: ['Growth Marketing', 'Subscription Funnels', 'Conversion Copy', 'DTC'],
    image: 'https://picsum.photos/seed/kura-coffee/1200/800',
    challenge: 'Customer acquisition costs were rising, while repeat purchase rates remained stagnant due to a lack of post-purchase education.',
    solution: 'We redesigned the subscription onboarding quiz, built sensory flavor-profiling cards, and rolled out targeted lifecycle email automations.',
    outcome: 'Subscription retention jumped from 2.1 to 6.8 months, yielding a 4.2x return on ad spend.',
  },
  {
    slug: 'stride-performance',
    title: 'Stride Adaptive Footwear',
    category: 'Web Design',
    client: 'Stride Athletic',
    year: '2024',
    featured: false,
    metric: '+92% mobile checkout',
    shortDescription: 'Interactive 3D product showcase and high-converting mobile commerce experience for biomechanical running shoes.',
    description: 'Stride builds marathon footwear engineered with carbon composites. We designed an interactive, sensory digital storefront that allows runners to explore cushioning densities, stride angles, and fit profiles.',
    tags: ['Mobile UX', '3D Product Viewer', 'FrontAlign', 'Ecommerce'],
    image: 'https://picsum.photos/seed/stride-performance/1200/800',
    challenge: 'Athletes found it difficult to understand technical foam innovations through standard 2D photos, resulting in high returns.',
    solution: 'We introduced interactive anatomical exploded views, custom fit recommendations, and a streamlined one-thumb mobile checkout flow.',
    outcome: 'Cart abandonment dropped by 34%, and overall mobile checkout completion soared by 92%.',
  },
  {
    slug: 'novus-ai',
    title: 'Novus Intelligence',
    category: 'Development',
    client: 'Novus AI Labs',
    year: '2023',
    featured: false,
    metric: '$12M Series A closed',
    shortDescription: 'High-polish interactive launch experience and dashboard prototyping for an enterprise multimodal AI assistant.',
    description: 'Novus transforms unstructured enterprise knowledge into real-time operational workflows. We built their flagship public web platform and interactive product simulation for enterprise decision-makers.',
    tags: ['Full-Stack', 'Interactive UI', 'Motion Design', 'SaaS'],
    image: 'https://picsum.photos/seed/novus-ai/1200/800',
    challenge: 'Novus needed to stand out in a crowded AI market with tangible, high-credibility proof of enterprise security and reliability.',
    solution: 'We built high-fidelity interactive product sandboxes that allow enterprise buyers to test real workflows directly in the browser.',
    outcome: 'The launch propelled the company to exceed its enterprise pilot waitlist target by 400% and successfully close a $12M Series A round.',
  },
];
