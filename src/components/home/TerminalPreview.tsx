import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { heroTabs, pageBadges } from '../../content/site';
import { cn } from '../../lib/utils';
import { Panel } from '../ui/Panel';

export function TerminalPreview() {
  const [activeId, setActiveId] = useState(heroTabs[0].id);
  const active = useMemo(
    () => heroTabs.find((item) => item.id === activeId) ?? heroTabs[0],
    [activeId],
  );

  return (
    <Panel className="relative overflow-hidden p-0">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-accent/10 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-10 w-full bg-gradient-to-b from-accent/10 to-transparent opacity-70" />
        <div className="absolute left-0 top-0 h-14 w-full animate-scan bg-gradient-to-b from-transparent via-accent/10 to-transparent opacity-20" />
      </div>

      <div className="relative border-b border-white/5 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-danger" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.28em] text-inkMuted">
            live preview
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {heroTabs.map((tab) => (
            <button
              key={tab.id}
              className={cn(
                'rounded-full border px-3 py-1.5 font-mono text-xs transition',
                activeId === tab.id
                  ? 'border-accent/40 bg-accent/10 text-accent'
                  : 'border-line text-inkMuted hover:text-ink',
              )}
              onClick={() => setActiveId(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="relative px-5 pb-5 pt-6">
        <div className="mb-5 flex flex-wrap gap-3">
          {pageBadges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-black/20 px-3 py-1.5 font-mono text-xs text-inkMuted"
            >
              <Icon size={14} className="text-accent" />
              {label}
            </div>
          ))}
        </div>

        <motion.div
          key={active.id}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[22px] border border-accent/10 bg-black/30 p-4 font-mono text-sm text-accent/90"
          initial={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.28 }}
        >
          {active.lines.map((line, index) => (
            <motion.div
              key={line}
              animate={{ opacity: 1, x: 0 }}
              className="mb-3 last:mb-0"
              initial={{ opacity: 0, x: -8 }}
              transition={{ delay: index * 0.06 }}
            >
              {line}
            </motion.div>
          ))}
          <div className="mt-4 text-ink">
            <span className="text-accent">recipient@moment</span>
            <span>:~$ </span>
            <span className="animate-blink">_</span>
          </div>
        </motion.div>
      </div>
    </Panel>
  );
}
