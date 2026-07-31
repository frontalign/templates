'use client'
import Link from 'next/link';
import { ArrowRight, BadgeCheck, BarChart3, Play, Sparkles } from 'lucide-react';
import { motion } from 'motion/react'

const highlights = [
  'Strategy-first creative direction',
  'Premium component-based delivery',
  'SEO, analytics, and launch support',
];

export function AgencyHero() {
  return (
    <section className="agency-hero overflow-hidden is-relative border-bottom">
      <div className="agency-hero-orb agency-hero-orb-one" />
      <div className="agency-hero-orb agency-hero-orb-two" />

      <div className="container py-6">
        <div className="is-grid grid-cols-1 lg:grid-cols-2 gap-5 align-items-center">
          <motion.div
            className="agency-hero-copy"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="badge is-primary is-pill mb-3">Premium Digital Agency Template</div>
            <h1 className="font-black text-5xlarge leading-none text-balance mbe-4">
              Build a brand people remember and a website that sells.
            </h1>
            <p className="text-large text-muted leading-relaxed mbe-4 max-w-3xl">
              A high-end agency experience for studios, consultants, SaaS teams, and creative businesses that need a premium web presence fast.
            </p>

            <div className="is-flex agency-actions gap-3 mbe-5">
              <Link href="/contact" className="button is-primary is-large rounded-pill">
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="button is-dark is-large rounded-pill">
                <Play size={17} /> View Case Studies
              </Link>
            </div>

            <div className="is-grid grid-cols-1 md:grid-cols-3 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  className="agency-check-card"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.18 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <BadgeCheck size={18} />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <motion.div
      className="agency-hero-visual is-relative"
      initial={{ opacity: 0, y: 42, scale: 0.96, rotateX: 8, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0 }}
      transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="agency-hero-glow" />
      <div className="agency-hero-grid" />

      <div className="agency-dashboard-card shadow-large rounded-4 overflow-hidden">

        <div className="agency-dashboard-body">
          <div className="agency-dashboard-header">
            <div>
              <div className="text-small text-muted mbe-1">Live campaign intelligence</div>
              <div className="h4 mbe-0">Revenue Performance</div>
            </div>
            <div className="badge is-success is-pill">Live</div>
          </div>

          <div className="agency-revenue-card">
            <div>
              <div className="text-muted text-small">Revenue influenced</div>
              <div className="agency-revenue-value">$427k</div>
            </div>
            <div className="agency-growth-pill">+38%</div>
          </div>

          <div className="agency-chart">
            {['38%', '58%', '46%', '74%', '66%', '92%'].map((height, index) => (
              <motion.span
                key={height}
                style={{ height }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.7, delay: 0.45 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </div>

          <div className="is-grid grid-cols-3 gap-3 mt-4">
            {[
              ['Leads', '2,840'],
              ['Conv.', '18.7%'],
              ['ROI', '4.8x'],
            ].map(([label, value]) => (
              <div key={label} className="agency-metric-card">
                <div className="text-muted text-small">{label}</div>
                <div className="h4 mb-0">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FloatingCard className="agency-floating-card-one" delay={0}>
        <Sparkles size={18} />
        <span>Brand system approved</span>
      </FloatingCard>

      <FloatingCard className="agency-floating-card-two" delay={0.3}>
        <BarChart3 size={18} />
        <span>+68% qualified leads</span>
      </FloatingCard>

      <FloatingCard className="agency-floating-card-three" delay={0.6}>
        <span className="agency-dot" />
        <span>12 assets shipped</span>
      </FloatingCard>
    </motion.div>
  );
}

function FloatingCard({ children, className, delay }: { children: React.ReactNode; className: string; delay: number }) {
  return (
    <motion.div
      className={`agency-floating-card ${className} shadow-medium`}
      initial={{ opacity: 0, y: 18, scale: 0.94 }}
      animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
      transition={{
        opacity: { duration: 0.45, delay: 0.65 + delay },
        scale: { duration: 0.45, delay: 0.65 + delay },
        y: { duration: 4.2, delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {children}
    </motion.div>
  );
}
