import { demos, pageIntros } from '../content/site';
import { DemoCard } from '../components/demos/DemoCard';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';

export function DemosPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        align="center"
        eyebrow={pageIntros.demos.eyebrow}
        title={pageIntros.demos.title}
        copy={pageIntros.demos.copy}
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {demos.map((demo) => (
          <DemoCard key={demo.slug} {...demo} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button to="/order">Start your brief</Button>
      </div>
    </div>
  );
}
