import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqItems } from '../../content/site';
import { cn } from '../../lib/utils';
import { Panel } from '../ui/Panel';

export function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Panel className="p-0" key={item.question}>
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <span className="text-lg font-medium text-ink">{item.question}</span>
              <ChevronDown
                className={cn(
                  'shrink-0 text-inkMuted transition duration-200',
                  isOpen && 'rotate-180 text-accent',
                )}
                size={18}
              />
            </button>
            <div
              className={cn(
                'grid transition-all duration-200',
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-base leading-7 text-inkMuted">{item.answer}</p>
              </div>
            </div>
          </Panel>
        );
      })}
    </div>
  );
}
