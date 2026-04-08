import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={cn(
        'rounded-[28px] border border-line bg-panel/90 p-6 shadow-terminal backdrop-blur',
        className,
      )}
    >
      {children}
    </div>
  );
}
