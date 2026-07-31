import Link from 'next/link'
import Image from 'next/image'
import type { Post } from '@/lib/data'

export default function ArticleCard({
  post,
  featured = false,
}: {
  post: Post
  featured?: boolean
}) {
  const hasCoverImage = Boolean(post.coverImage)

  if (featured) {
    return (
      <article
        className="is-relative is-block overflow-hidden rounded-4 bg-slate-900 h-full"
        style={{ minHeight: '430px' }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="is-absolute inset-0"
          aria-label={post.title}
        />

        {hasCoverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-fit-cover transition-transform hover:scale-105"
            priority
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className="is-absolute inset-0 bg-slate-800"
            style={{ zIndex: 1 }}
            aria-hidden="true"
          />
        )}

        <div
          className="is-absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,.86), rgba(0,0,0,.38), rgba(0,0,0,.08))',
            zIndex: 2,
          }}
        />

        <div
          className="is-absolute bottom-0 w-full p-4 md:p-6 text-white"
          style={{ zIndex: 3 }}
        >
          <Link
            href={`/categories/${post.category.slug}`}
            className="badge is-primary is-pill text-no-decoration mb-3"
          >
            {post.category.name}
          </Link>

          <h1 className="h2 text-white font-black leading-tight mbe-3 max-w-4xl">
            {post.title}
          </h1>

          <p className="text-large text-slate-200 line-clamp-2 mbe-4 max-w-3xl">
            {post.excerpt}
          </p>

          <div className="is-flex align-items-center gap-3 text-slate-300 text-small">
            <span className="font-semibold text-white">{post.author.name}</span>
            <span>&bull;</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>&bull;</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="is-flex flex-col gap-3 h-full bg-white border rounded-4 p-2">
      <Link
        href={`/blog/${post.slug}`}
        className="ratio is-16x9 is-block rounded-3 overflow-hidden bg-slate-100"
        aria-label={post.title}
      >
        {hasCoverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-fit-cover transition-transform hover:scale-105"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div
            className="w-full h-full is-flex align-items-center justify-content-center bg-slate-100 text-slate-400 text-small"
            aria-hidden="true"
          >
            No image
          </div>
        )}
      </Link>

      <div className="p-2 is-flex flex-col flex-1">
        <Link
          href={`/categories/${post.category.slug}`}
          className="text-tiny text-primary font-bold text-uppercase text-no-decoration mb-2"
        >
          {post.category.name}
        </Link>

        <h3 className="text-base font-bold line-clamp-2 leading-tight mb-2">
          <Link
            href={`/blog/${post.slug}`}
            className="text-dark text-no-decoration hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-small text-muted line-clamp-2 mbe-3">
          {post.excerpt}
        </p>

        <div className="is-flex justify-content-between align-items-center mbs-auto text-tiny text-muted">
          <span className="font-medium">{post.author.name}</span>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </article>
  )
}