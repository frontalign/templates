import { stats } from '@/data/mock';
import { Reveal } from '@/components/shared/motion';

export function StatsSection() {
  return (
    <section className="py-6">
      <div className="container">
        <div className="is-grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="agency-stat-card text-center rounded-4 border">
                <div className="text-4xlarge font-black leading-none mbe-2">{item.value}</div>
                <div className="text-muted font-medium">{item.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
