import Link from 'next/link'
import ArticleCard from '@/components/ArticleCard'
import type { Post } from '@/lib/data'

export default function RelatedArticles({ posts }: { posts: Post[] }) {
  if (!posts.length) return null

  return (
    <section className="px-4 md:px-5 lg:px-6 pbe-6">
      <div className="container">
        <div className="is-flex flex-column md:flex-row justify-content-between gap-3 mbe-5">
          <div>
            <span className="text-tiny text-primary text-uppercase font-bold">Read next</span>
            <h2 className="h2 font-black mbe-2">Related articles</h2>
          </div>
          <Link href="/blog" className="button is-light rounded-pill align-self-start">All articles</Link>
        </div>

        <div className="is-grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
