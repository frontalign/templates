import { Reveal } from '@/components/shared/motion'
import { services } from '../../data/mock'
import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main className="py-6 container">
      <Reveal>
        <div className="text-center mbe-6 max-w-3xl mx-auto">
          <h1 className="h1">Our Services</h1>
          <p className="text-large text-muted mbe-4">
            We offer a full suite of digital capabilities. Everything you need to grow your
            business online.
          </p>
        </div>
      </Reveal>

      <div className="is-grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((srv, index) => (
          <Reveal key={srv.slug} delay={index * 0.08}>
            <div className="border bg-slate-50 rounded-4 p-5">
              <h2 className="h3 mbe-2">{srv.title}</h2>
              <p className="text-muted mbe-4">{srv.description}</p>
              <Link href={`/services/${srv.slug}`} className="button is-primary is-pill">
                View Details
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  )
}