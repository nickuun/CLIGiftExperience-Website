import { Link } from 'react-router-dom';
import { pageIntros } from '../content/site';
import { Button } from '../components/ui/Button';
import { Panel } from '../components/ui/Panel';
import { SectionHeading } from '../components/ui/SectionHeading';

export function ThankYouPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <SectionHeading
        eyebrow={pageIntros.thankYou.eyebrow}
        title={pageIntros.thankYou.title}
        copy={pageIntros.thankYou.copy}
      />
      <Panel className="mt-10">
        <div className="space-y-4 text-base leading-7 text-inkMuted">
          <p>Your request has been saved locally in this prototype flow.</p>
          <p>For the next iteration, this page is ready to sit behind a real form submission endpoint or email workflow.</p>
          <p>
            Until then, you can head back to the <Link className="text-accent" to="/order">order form</Link> to refine the brief or return home.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button to="/">Back to home</Button>
          <Button to="/order" variant="secondary">
            Edit your brief
          </Button>
        </div>
      </Panel>
    </div>
  );
}
