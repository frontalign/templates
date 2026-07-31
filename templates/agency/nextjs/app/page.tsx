import { AgencyHero, ServicesSection, StatsSection } from '@/components/agency';
import Link from 'next/link';

function UpgradeSection() {
  return (
    <section className="py-6">
      <div className="container text-center">
        <h2 className="h2 mb-3">Need the complete agency system?</h2>
        <p className="text-large text-muted mb-4">
          Unlock portfolio, testimonials, pricing, process timeline, blog,
          about, contact pages, and premium hero visuals with Agency Premium.
        </p>
        <Link href="https://frontalign.dev/templates/agency" className="button is-primary is-large rounded-pill">
          View Agency Premium
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="agency-starter">
      <AgencyHero />
      <StatsSection />
      <ServicesSection />
      <UpgradeSection />
    </main>
  );
}
