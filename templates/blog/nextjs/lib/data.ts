export interface Author {
  id: string;
  slug: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: Category;
  author: Author;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  views: number;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
}

const authors: Author[] = [
  {
    id: "a1",
    slug: "alex-morgan",
    name: "Alex Morgan",
    avatar: "https://picsum.photos/seed/alex/150/150",
    bio: "Frontend engineer writing about modern web architecture, performance and product systems.",
  },
  {
    id: "a2",
    slug: "sam-taylor",
    name: "Sam Taylor",
    avatar: "https://picsum.photos/seed/sam/150/150",
    bio: "Digital designer exploring editorial UX, typography and practical design systems.",
  },
  {
    id: "a3",
    slug: "mira-khan",
    name: "Mira Khan",
    avatar: "https://picsum.photos/seed/mira/150/150",
    bio: "Product strategist focused on creator tools, SaaS growth and content-led products.",
  }
];

const categories: Category[] = [
  { id: "c1", slug: "technology", name: "Technology", description: "Frontend engineering, software architecture and emerging tools." },
  { id: "c2", slug: "design", name: "Design", description: "UI systems, typography, layout and visual craft." },
  { id: "c3", slug: "product", name: "Product", description: "SaaS strategy, creator products and growth thinking." },
  { id: "c4", slug: "workflow", name: "Workflow", description: "Productivity, remote work and deep creative routines." }
];

export const mockPosts: Post[] = [
  {
    id: "p1",
    slug: "building-editorial-products-with-nextjs",
    title: "Building Editorial Products with Next.js App Router",
    excerpt: "A practical blueprint for shipping fast, structured and SEO-ready publishing experiences with modern React.",
    content: "<h2>Editorial systems need structure</h2><p>Great publishing products combine clean information architecture, reusable content modules and fast page delivery.</p><p>Next.js App Router gives teams a strong foundation for layouts, metadata, streaming and static generation without forcing heavy client-side code.</p><h2>Start with reusable sections</h2><p>Hero blocks, article cards, author modules and topic rails should be components, not one-off markup.</p>",
    coverImage: "https://picsum.photos/seed/editorial-next/1200/700",
    category: categories[0],
    author: authors[0],
    tags: ["Next.js", "Architecture", "Publishing"],
    publishedAt: "2026-05-24T10:00:00Z",
    updatedAt: "2026-05-24T10:00:00Z",
    readingTime: "7 min read",
    views: 24800,
    featured: true,
    seoTitle: "Building Editorial Products with Next.js",
    seoDescription: "A practical blueprint for modern editorial products with Next.js App Router.",
  },
  {
    id: "p2",
    slug: "design-systems-that-feel-premium",
    title: "Design Systems That Feel Premium Without Feeling Heavy",
    excerpt: "How spacing, contrast, rhythm and restraint can make a template feel more expensive than its code size suggests.",
    content: "<h2>Premium is restraint</h2><p>Premium UI is rarely about adding more decoration. It is about strong hierarchy, clear rhythm and consistent primitives.</p><p>Use fewer visual effects, but make every section intentional.</p>",
    coverImage: "https://picsum.photos/seed/premium-system/1200/700",
    category: categories[1],
    author: authors[1],
    tags: ["Design Systems", "UI", "CSS"],
    publishedAt: "2026-05-22T08:30:00Z",
    updatedAt: "2026-05-22T08:30:00Z",
    readingTime: "6 min read",
    views: 19300,
    featured: true,
    seoTitle: "Premium Design Systems",
    seoDescription: "How to create premium-feeling interfaces with a lightweight design system.",
  },
  {
    id: "p3",
    slug: "creator-tools-need-better-defaults",
    title: "Creator Tools Need Better Defaults, Not More Settings",
    excerpt: "A product essay on why modern creator tools win by reducing decisions and improving first-run quality.",
    content: "<h2>Defaults shape the product</h2><p>Most users do not want to configure every detail. They want the first result to be good enough to publish.</p>",
    coverImage: "https://picsum.photos/seed/creator-tools/1200/700",
    category: categories[2],
    author: authors[2],
    tags: ["Product", "SaaS", "Creators"],
    publishedAt: "2026-05-20T14:15:00Z",
    updatedAt: "2026-05-20T14:15:00Z",
    readingTime: "5 min read",
    views: 15400,
    featured: false,
    seoTitle: "Creator Tools Need Better Defaults",
    seoDescription: "Why modern creator products should focus on excellent defaults.",
  },
  {
    id: "p4",
    slug: "typography-as-product-strategy",
    title: "Typography as Product Strategy",
    excerpt: "Type is not decoration. It is navigation, trust, scanning speed and brand perception working at once.",
    content: "<h2>Typography creates trust</h2><p>Good typography improves comprehension and makes the product feel calmer, sharper and more reliable.</p>",
    coverImage: "https://picsum.photos/seed/type-strategy/1200/700",
    category: categories[1],
    author: authors[1],
    tags: ["Typography", "Brand", "UX"],
    publishedAt: "2026-05-18T11:00:00Z",
    updatedAt: "2026-05-18T11:00:00Z",
    readingTime: "8 min read",
    views: 12100,
    featured: false,
    seoTitle: "Typography as Product Strategy",
    seoDescription: "Why typography is a strategic part of product design.",
  },
  {
    id: "p5",
    slug: "the-lightweight-stack-for-content-products",
    title: "The Lightweight Stack for Content Products",
    excerpt: "A lean architecture for blogs, magazines and docs products that avoids unnecessary dependencies.",
    content: "<h2>Keep the stack intentional</h2><p>Content products should prioritize speed, maintainability and clean authoring flows.</p>",
    coverImage: "https://picsum.photos/seed/lightweight-stack/1200/700",
    category: categories[0],
    author: authors[0],
    tags: ["Frontend", "Performance", "Stack"],
    publishedAt: "2026-05-16T09:30:00Z",
    updatedAt: "2026-05-16T09:30:00Z",
    readingTime: "9 min read",
    views: 17600,
    featured: false,
    seoTitle: "Lightweight Stack for Content Products",
    seoDescription: "A lean frontend architecture for modern publishing products.",
  },
  {
    id: "p6",
    slug: "deep-work-for-digital-builders",
    title: "Deep Work for Digital Builders",
    excerpt: "How makers can protect focus while balancing client work, product work and continuous learning.",
    content: "<h2>Focus is infrastructure</h2><p>Deep work is easier when your environment removes repeated decisions and protects long creative blocks.</p>",
    coverImage: "https://picsum.photos/seed/deep-work-builder/1200/700",
    category: categories[3],
    author: authors[2],
    tags: ["Workflow", "Focus", "Productivity"],
    publishedAt: "2026-05-14T12:00:00Z",
    updatedAt: "2026-05-14T12:00:00Z",
    readingTime: "4 min read",
    views: 9400,
    featured: false,
    seoTitle: "Deep Work for Digital Builders",
    seoDescription: "Practical focus systems for designers and developers.",
  },
  {
    id: "p7",
    slug: "better-cards-better-content-discovery",
    title: "Better Cards, Better Content Discovery",
    excerpt: "Article cards decide whether readers continue. Here is how to make cards scan-friendly without clutter.",
    content: "<h2>Cards are editorial decisions</h2><p>A good card balances image, category, title, excerpt and metadata without making every story feel identical.</p>",
    coverImage: "https://picsum.photos/seed/card-discovery/1200/700",
    category: categories[1],
    author: authors[1],
    tags: ["Cards", "UX", "Content"],
    publishedAt: "2026-05-12T15:20:00Z",
    updatedAt: "2026-05-12T15:20:00Z",
    readingTime: "6 min read",
    views: 8800,
    featured: false,
    seoTitle: "Better Article Cards",
    seoDescription: "How to design better cards for content discovery.",
  },
  {
    id: "p8",
    slug: "saas-homepages-should-read-like-products",
    title: "SaaS Homepages Should Read Like Products",
    excerpt: "A homepage is not a poster. It should explain the system, reduce doubts and guide action with confidence.",
    content: "<h2>Clarity sells</h2><p>The best SaaS homepages translate product value into structured proof, not vague marketing copy.</p>",
    coverImage: "https://picsum.photos/seed/saas-homepage/1200/700",
    category: categories[2],
    author: authors[2],
    tags: ["SaaS", "Landing Pages", "Strategy"],
    publishedAt: "2026-05-10T10:45:00Z",
    updatedAt: "2026-05-10T10:45:00Z",
    readingTime: "7 min read",
    views: 13200,
    featured: false,
    seoTitle: "SaaS Homepages Should Read Like Products",
    seoDescription: "A framework for clearer SaaS homepage strategy.",
  }
];

export async function getPosts(): Promise<Post[]> {
  return mockPosts;
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return mockPosts.filter((post) => post.featured);
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return mockPosts.find((post) => post.slug === slug);
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return categories.find((cat) => cat.slug === slug);
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  return mockPosts.filter((post) => post.category.slug === categorySlug);
}

export async function getAuthorBySlug(slug: string): Promise<Author | undefined> {
  return authors.find((author) => author.slug === slug);
}

export async function getPostsByAuthor(authorSlug: string): Promise<Post[]> {
  return mockPosts.filter((post) => post.author.slug === authorSlug);
}

export async function searchPosts(query: string): Promise<Post[]> {
  const lowercaseQuery = query.toLowerCase();
  return mockPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export async function getRelatedPosts(postSlug: string, limit = 3): Promise<Post[]> {
  const current = mockPosts.find((post) => post.slug === postSlug);
  if (!current) return [];

  return mockPosts
    .filter((post) => post.slug !== postSlug)
    .filter((post) => post.category.slug === current.category.slug || post.tags.some((tag) => current.tags.includes(tag)))
    .slice(0, limit);
}
