/**
 * Optional Logo Strip
 *
 * Uncomment this section if you have real client logos.
 *
 * Recommended:
 * - Real customer logos
 * - Partner logos
 * - Press mentions
 *
 * Avoid:
 * - Fake company names
 * - Placeholder brands



import { logos } from '@/data/mock';
import { Reveal } from '@/components/shared/motion';

export function LogoStrip() {
  return (
    <section className="py-5 border-bottom agency-logo-strip">
      <div className="container">
        <Reveal>
          <p className="text-center text-muted text-small text-uppercase font-bold mbe-4">Trusted by ambitious teams</p>
          <div className="agency-logo-grid">
            {logos.map((logo) => (
              <div key={logo} className="agency-logo-item">{logo}</div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
 */