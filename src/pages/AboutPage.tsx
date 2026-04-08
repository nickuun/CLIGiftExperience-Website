import { aboutPoints, pageIntros } from '../content/site';
import { Button } from '../components/ui/Button';
import { Panel } from '../components/ui/Panel';
import { SectionHeading } from '../components/ui/SectionHeading';

export function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow={pageIntros.about.eyebrow}
        title={pageIntros.about.title}
        copy={pageIntros.about.copy}
      />
      <div className="mt-12 grid gap-6">
        {aboutPoints.map((point) => (
          <Panel key={point.title}>
            <h3 className="text-2xl font-semibold text-ink">{point.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-inkMuted">{point.copy}</p>
          </Panel>
        ))}
      </div>
      <Panel className="mt-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/90">Why this exists</p>
        <p className="mt-4 text-lg leading-8 text-inkMuted">
          Some gifts are more meaningful when the delivery feels considered. This studio exists to turn that delivery into a small playable moment: clever enough to feel special, restrained enough to stay polished, and personal enough to matter.
        </p>
      </Panel>
      <div className="mt-10">
        <Button to="/order">Order now</Button>
      </div>
    </div>
  );
}
