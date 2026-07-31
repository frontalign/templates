import { services } from "../../../data/mock";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="py-6 container max-w-4xl">
      <Link href="/services" className="link text-muted mb-4 is-inline-block">
        &larr; Back to services
      </Link>

      <div className="bg-slate-50 p-6 rounded-4 border mb-5">
        <h1 className="h1 mb-3">{service.title}</h1>
        <p className="text-large text-muted">{service.description}</p>
      </div>

      <div className="content text-base leading-relaxed">
        <h2 className="h3 mb-3">Our Process</h2>

        <p>
          We take a strategic approach to {service.title.toLowerCase()}. Our
          process involves deep research, iterative design, and robust
          implementation.
        </p>

        <div className="is-grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
          <div className="border rounded-3 p-3 text-center bg-white">
            <div className="font-bold text-primary mb-1">1. Discovery</div>
            <p className="text-small text-muted">Understanding your goals.</p>
          </div>

          <div className="border rounded-3 p-3 text-center bg-white">
            <div className="font-bold text-primary mb-1">2. Execution</div>
            <p className="text-small text-muted">Building the solution.</p>
          </div>

          <div className="border rounded-3 p-3 text-center bg-white">
            <div className="font-bold text-primary mb-1">3. Delivery</div>
            <p className="text-small text-muted">Launching to the world.</p>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-5 border-top text-center">
        <h3 className="h3 mb-3">Need {service.title}?</h3>

        <Link
          href="/contact"
          className="button is-primary is-large rounded-pill"
        >
          Request a Quote
        </Link>
      </div>
    </main>
  );
}
