import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

type ButtonProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
};

const styles = {
  primary: 'bg-accent text-canvas hover:bg-[#96efb4] shadow-glow',
  secondary:
    'border border-line bg-panelAlt text-ink hover:border-accent/50 hover:text-accent',
  ghost: 'border border-transparent bg-transparent text-inkMuted hover:text-ink',
};

export function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition duration-200',
    styles[variant],
    className,
  );

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
