import Link from 'next/link'
import { getFeaturedPosts, getPosts, getCategories } from '@/lib/data'
import ArticleCard from '@/components/ArticleCard'

export default async function Home() {
  const posts = await getPosts()
  const featuredPosts = await getFeaturedPosts()
  const categories = await getCategories()
  const heroPost = featuredPosts[0] ?? posts[0]
  const latestPosts = posts.filter((post) => post.slug !== heroPost?.slug).slice(0, 6)

  return (
    <main>
      <section className="py-6 px-4 md:px-5 lg:px-6 bg-slate-50 border-bottom">
        <div className="container">
          <div className="is-grid grid-cols-1 lg:grid-cols-2 gap-6 align-items-center">
            <div>
              <span className="badge is-primary is-pill mbe-3">Next.js Blog Starter</span>
              <h1 className="text-4xlarge font-black leading-tight mbe-4">
                A clean publishing starter for modern blogs.
              </h1>
              <p className="text-large text-muted mbe-4 max-w-2xl">
                FrontPress Starter gives you a fast, responsive blog foundation with mock content, categories, article pages and SEO-ready metadata.
              </p>
              <div className="is-flex flex-wrap gap-3">
                <Link href="/blog" className="button is-primary rounded-pill">Browse articles</Link>
                <Link href="/about" className="button is-light rounded-pill">Learn more</Link>
              </div>
            </div>

            {heroPost && <ArticleCard post={heroPost} featured />}
          </div>
        </div>
      </section>

      <section className="py-6 px-4 md:px-5 lg:px-6">
        <div className="container">
          <div className="is-flex flex-column md:flex-row justify-content-between gap-3 mbe-5">
            <div>
              <span className="text-tiny text-primary text-uppercase font-bold">Topics</span>
              <h2 className="h2 font-black mbe-2">Explore categories</h2>
              <p className="text-muted m-0">Simple category archives are included in the starter.</p>
            </div>
          </div>

          <div className="is-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {categories.map((category) => (
              <Link key={category.id} href={`/categories/${category.slug}`} className="is-block p-4 rounded-4 border bg-white text-no-decoration hover:bg-slate-50 transition-colors">
                <h3 className="text-base font-bold text-slate-900 mbe-2">{category.name}</h3>
                <p className="text-small text-muted m-0">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 px-4 md:px-5 lg:px-6 bg-slate-50 border-top">
        <div className="container">
          <div className="is-flex flex-column md:flex-row justify-content-between gap-3 mbe-5">
            <div>
              <span className="text-tiny text-primary text-uppercase font-bold">Latest</span>
              <h2 className="h2 font-black mbe-2">Fresh articles</h2>
              <p className="text-muted m-0">Replace the mock posts with your own content and publish.</p>
            </div>
            <Link href="/blog" className="button is-light rounded-pill align-self-start">View all</Link>
          </div>

          <div className="is-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
