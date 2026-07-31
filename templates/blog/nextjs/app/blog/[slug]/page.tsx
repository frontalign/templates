import { getPostBySlug, getRelatedPosts } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import RelatedArticles from '@/components/RelatedArticles'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  const relatedPosts = await getRelatedPosts(post.slug, 3)

  return (
    <>
      <article className="py-6 px-4 md:px-5 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mbe-5">
            <Link href={`/categories/${post.category.slug}`} className="badge is-primary-outline is-pill text-no-decoration mbe-3">
              {post.category.name}
            </Link>

            <h1 className="h1 font-black mbe-4 mx-auto max-w-3xl">{post.title}</h1>
            <p className="text-large text-muted mbe-4 max-w-3xl mx-auto">{post.excerpt}</p>

            <p className="text-small text-muted m-0">
              By <span className="font-semibold text-dark">{post.author.name}</span> &middot;{' '}
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} &middot; {post.readingTime}
            </p>
          </header>

          <div className="ratio is-21x9 rounded-4 overflow-hidden shadow-medium bg-slate-100 mbe-6">
            <Image src={post.coverImage} alt={post.title} fill className="object-fit-cover" priority referrerPolicy="no-referrer" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="text-base text-body leading-relaxed mbe-6" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="border-top pbs-4">
              <h2 className="h6 font-semibold mbe-3">Tags</h2>
              <div className="is-flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="badge is-light text-dark font-medium is-pill">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <RelatedArticles posts={relatedPosts} />
    </>
  )
}
