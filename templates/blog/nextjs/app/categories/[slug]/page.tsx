import { getCategoryBySlug, getPostsByCategory } from "@/lib/data";
import ArticleCard from "@/components/ArticleCard";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Articles - FrontPress`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(slug);

  return (
    <div className="py-6" style={{ paddingInline: "2.5rem" }}>
      <header className="mb-6 text-center max-w-3xl mx-auto border-bottom pbe-5">
        <span className="badge is-primary-outline is-pill mbe-2">Category</span>

        <h1 className="h1 font-black mbe-3 capitalize text-capitalize">
          {category.name}
        </h1>

        <p className="text-large text-muted m-0">{category.description}</p>
      </header>

      {posts.length > 0 ? (
        <div className="is-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-6 bg-slate-100 rounded-3 border">
          <p className="text-muted text-large m-0">
            No articles published in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
