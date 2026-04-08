import { ArrowRight, Check, Command, Gift, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  demos,
  homeHighlights,
  pricing,
  processSteps,
  useCases,
  valueCards,
} from '../content/site';
import { DemoCard } from '../components/demos/DemoCard';
import { FaqList } from '../components/home/FaqList';
import { TerminalPreview } from '../components/home/TerminalPreview';
import { Button } from '../components/ui/Button';
import { Panel } from '../components/ui/Panel';
import { SectionHeading } from '../components/ui/SectionHeading';
import { currency } from '../lib/utils';

export function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-center lg:pt-20">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.28em] text-accent/90">
            <Command size={14} />
            Playable gift studio
          </div>
          <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
            Custom terminal-style gift experiences
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-inkMuted">
            Short, personalized browser experiences designed for one person. Ideal for birthdays,
            anniversaries, proposals, treasure hunts, and surprise gift reveals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="gap-2" to="/order">
              Order yours
              <ArrowRight size={16} />
            </Button>
            <Button to="/demos" variant="secondary">
              See demos
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {homeHighlights.map((item) => (
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-panelAlt px-3 py-2 text-sm text-inkMuted"
                key={item}
              >
                <Check size={16} className="text-accent" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="lg:pl-6"
          initial={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <TerminalPreview />
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="The product"
          title="A custom browser-based terminal gift, built around one person."
          copy="It is a premium-feeling digital gift with a fixed format: custom intro, names and messages, a simple puzzle or unlock flow, and a final reveal. The site sells one product only, so the offer stays clear."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valueCards.map(({ icon: Icon, title, copy }) => (
            <Panel className="h-full" key={title}>
              <div className="inline-flex rounded-2xl bg-accent/10 p-3 text-accent">
                <Icon size={20} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-base leading-7 text-inkMuted">{copy}</p>
            </Panel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <SectionHeading
          eyebrow="Use cases"
          title="One product, shaped for different moments."
          copy="These are examples of where the format works best. The hook is always the same: a clever, personal terminal-themed gift that feels like a small adventure."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((useCase, index) => (
            <Panel className="h-full" key={useCase.title}>
              <p className="font-mono text-sm text-accent/90">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-semibold text-ink">{useCase.title}</h3>
              <p className="mt-3 text-base leading-7 text-inkMuted">{useCase.copy}</p>
            </Panel>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Demos"
            title="Preview the feel before you order."
            copy="The demos are intentionally curated. Enough to prove the format, not so much that the homepage turns into a product maze."
          />
          <Link className="inline-flex items-center gap-2 text-sm text-accent" to="/demos">
            View all demos
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {demos.map((demo) => (
            <DemoCard key={demo.slug} {...demo} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr]">
          <SectionHeading
            eyebrow="How it works"
            title="A simple process with a tight product boundary."
            copy="The site is designed to turn curiosity into inquiry, not open-ended consulting. The structure below keeps the offer understandable and the outcome consistent."
          />
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <Panel className="flex items-start gap-4" key={step}>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-sm text-accent">
                  0{index + 1}
                </div>
                <p className="pt-1 text-base leading-7 text-inkMuted">{step}</p>
              </Panel>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.52fr_0.48fr]">
          <Panel className="relative overflow-hidden">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/90">Pricing</p>
            <h3 className="mt-4 text-3xl font-semibold text-ink">CLI Gift Experience</h3>
            <div className="mt-5 flex items-end gap-3">
              <p className="text-5xl font-semibold text-ink">{currency(pricing.basePrice)}</p>
              <p className="pb-2 text-sm uppercase tracking-[0.2em] text-inkMuted">fixed base price</p>
            </div>
            <div className="mt-8 space-y-4">
              {pricing.includes.map((item) => (
                <div className="flex items-start gap-3 text-sm leading-6 text-inkMuted" key={item}>
                  <Sparkles size={16} className="mt-1 shrink-0 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-[24px] border border-amber/20 bg-amber/10 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-amber">Optional add-on</p>
                  <p className="mt-2 text-xl font-semibold text-ink">Treasure Hunt Integration</p>
                </div>
                <p className="text-2xl font-semibold text-ink">+R{pricing.addOnPrice}</p>
              </div>
              <div className="mt-4 space-y-2 text-sm leading-6 text-inkMuted">
                {pricing.addOnIncludes.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          </Panel>

          <Panel>
            <SectionHeading
              eyebrow="FAQ"
              title="Common questions before ordering"
              copy="The homepage carries the key answers so someone can understand the format and decide quickly."
            />
            <div className="mt-8">
              <FaqList />
            </div>
          </Panel>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-10 sm:px-8">
        <Panel className="flex flex-col gap-6 overflow-hidden lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/10 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.28em] text-accent/90">
              <Gift size={14} />
              Start the surprise
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-ink sm:text-4xl">
              Order a custom experience built for one memorable moment.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-inkMuted">
              The best fit for people who want the gift itself to feel personal, playful, and worth sending as a link.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to="/order">Start your brief</Button>
            <Button to="/about" variant="secondary">
              About the studio
            </Button>
          </div>
        </Panel>
      </section>
    </div>
  );
}
