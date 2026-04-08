import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Panel } from '../ui/Panel';

type DemoCardProps = {
  title: string;
  useCase: string;
  summary: string;
  preview: string[];
};

export function DemoCard({ title, useCase, summary, preview }: DemoCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Panel className="flex h-full flex-col justify-between">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent/80">{useCase}</p>
        <h3 className="mt-4 text-2xl font-semibold text-ink">{title}</h3>
        <p className="mt-3 text-base leading-7 text-inkMuted">{summary}</p>
        <div className="mt-6 rounded-[22px] border border-accent/10 bg-black/25 p-4 font-mono text-sm text-accent/90">
          {preview.map((line) => (
            <div className="mb-2 last:mb-0" key={line}>
              &gt; {line}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className="inline-flex items-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm font-medium text-canvas"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <Play size={16} />
          {open ? 'Hide preview' : 'Play preview'}
        </button>
        <Link
          className="inline-flex items-center gap-2 rounded-2xl border border-line px-4 py-3 text-sm text-inkMuted transition hover:text-ink"
          to="/order"
        >
          Use this as inspiration
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className={`grid transition-all duration-300 ${open ? 'mt-6 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <motion.div
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : 10 }}
            className="rounded-[22px] border border-accent/10 bg-black/35 p-4"
            initial={false}
            transition={{ duration: 0.22 }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent/80">
              teaser sequence
            </p>
            <div className="mt-4 space-y-2 font-mono text-sm text-accent/90">
              {preview.map((line, index) => (
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -6 }}
                  key={`${title}-${line}`}
                  transition={{ delay: index * 0.05 }}
                >
                  &gt; {line}
                </motion.div>
              ))}
              <div className="pt-2 text-ink">
                recipient@moment:~$ <span className="animate-blink">_</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Panel>
  );
}
