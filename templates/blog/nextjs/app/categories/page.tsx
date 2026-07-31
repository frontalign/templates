import { getCategories } from "@/lib/data";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categories - FrontPress',
  description: 'Browse articles by topic.',
};

export default async function CategoriesIndex() {
  const categories = await getCategories();

  return (
    <div className="py-6 min-h-screen" style={{ paddingInline: '2.5rem' }}>
      <header className="mb-6 text-center max-w-2xl mx-auto">
        <h1 className="h1 font-black mb-3">Categories</h1>
        <p className="text-large text-muted mb-0">Find the topics you care about most.</p>
      </header>
      
      <div className="is-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link href={`/categories/${cat.slug}`} key={cat.id} className="text-no-decoration">
            <div className="bg-white border rounded-3 p-5 h-full transition-shadow duration-200 hover:shadow-medium hover:border-primary text-center is-flex flex-col align-items-center justify-content-center hover:translate-y-1">
              <h2 className="h3 font-bold text-dark mbe-2">{cat.name}</h2>
              <p className="text-muted m-0">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
