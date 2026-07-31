import Link from 'next/link';
import { Code2, PenTool, Sparkles, TrendingUp } from 'lucide-react';
import { services } from '@/data/mock';
import { Reveal } from '@/components/shared/motion';

const serviceIcons = {
  Sparkles,
  PenTool,
  Code2,
  TrendingUp,
};

export function ServicesSection() {
  return (
    <section className="py-6 bg-surface">
      <div className="container">
        <Reveal className="agency-section-heading text-center mx-auto mbe-5">
          <div className="badge is-primary-outline is-pill mbe-3">What we do</div>
          <h2 className="h2 mbe-3">Everything a premium agency website needs.</h2>
          <p className="text-large text-muted">Modern sections, strong hierarchy, polished cards, and conversion-focused content blocks.</p>
        </Reveal>

        <div className="is-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((srv, index) => {
            const Icon = serviceIcons[srv.icon as keyof typeof serviceIcons] ?? Sparkles;

            return (
              <Reveal key={srv.slug} delay={index * 0.08}>
                <Link href={`/services/${srv.slug}`} className="agency-service-card link rounded-4 border p-4 transition-all">
                  <div className="agency-icon-wrap mbe-4">
                    <Icon size={24} />
                  </div>
                  <div className="badge is-light is-pill mbe-3">{srv.metric}</div>
                  <h3 className="h4 mb-2">{srv.title}</h3>
                  <p className="text-muted text-small mbe-4">{srv.description}</p>
                  <span className="font-bold text-primary">Explore service →</span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
