import Link from 'next/link';
import { BadgeCheck } from 'lucide-react';
import { Reveal } from '@/components/shared/motion';

const pricingFeatures = [
  'Premium landing page system',
  'Brand direction and conversion copy',
  'Responsive build with FrontAlign',
  'Launch checklist and 14-day support',
];

export function OfferSection() {
  return (
    <section className="py-6">
      <div className="container">
        <Reveal>
          <div className="agency-offer-card rounded-4 overflow-hidden shadow-large">
            <div className="is-grid grid-cols-1 lg:grid-cols-2">
              <div className="agency-offer-copy p-6">
                <div className="badge is-primary is-pill mbe-3">Agency Pro Package</div>
                <h2 className="h2 text-white mbe-3">Launch a premium agency website without starting from zero.</h2>
                <p className="text-slate-300 text-large mbe-4">
                  Perfect for selling this as a paid template: strong hero, trust proof, services, work, process, testimonials, CTA, and footer.
                </p>
                <div className="is-flex agency-actions gap-3">
                  <Link href="/pricing" className="button is-primary is-large rounded-pill">View Pricing</Link>
                  <Link href="/contact" className="button is-light is-large rounded-pill">Get Proposal</Link>
                </div>
              </div>

              <div className="agency-offer-panel p-6">
                <div className="agency-price-card rounded-4 p-4">
                  <div className="text-muted text-small mbe-1">Starting package</div>
                  <div className="is-flex align-items-end gap-2 mbe-4">
                    <span className="text-5xlarge font-black leading-none">$2.9k</span>
                    <span className="text-muted mbe-2">/ project</span>
                  </div>
                  <ul className="list is-unstyled mbe-4">
                    {pricingFeatures.map((feature) => (
                      <li key={feature} className="is-flex align-items-center gap-2 mbe-2">
                        <BadgeCheck size={18} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="button is-dark rounded-pill w-full">Start now</Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
