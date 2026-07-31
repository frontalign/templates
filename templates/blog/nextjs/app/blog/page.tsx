import Link from 'next/link'
import type { Metadata } from 'next'
import { getPosts, getCategories } from '@/lib/data'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Browse all articles from FrontPress Starter.',
}

export default async function BlogIndex() {
  const posts = await getPosts()
  const categories = await getCategories()

  return (
    <main className="py-6 px-4 md:px-5 lg:px-6">
      <div className="container">
        <header className="mbe-6 text-center max-w-3xl mx-auto">
          <h1 className="h1 font-black mbe-3">All articles</h1>
          <p className="text-large text-muted mbe-0">Browse insights, tutorials and practical publishing notes.</p>
        </header>

        <div className="is-flex justify-content-center mbe-6">
          <nav className="nav is-pill overflow-x-auto pbe-2" aria-label="Article categories">
            <div className="nav-item is-active">
              <Link href="/blog" className="nav-link">All</Link>
            </div>
            {categories.map((category) => (
              <div className="nav-item" key={category.id}>
                <Link href={`/categories/${category.slug}`} className="nav-link">{category.name}</Link>
              </div>
            ))}
          </nav>
        </div>

        <div className="is-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}
