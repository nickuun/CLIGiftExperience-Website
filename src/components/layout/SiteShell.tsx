import { Menu, TerminalSquare } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { footerBlurb, navItems } from '../../content/site';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';

export function SiteShell() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:42px_42px] opacity-[0.16]" />
      <header className="sticky top-0 z-40 border-b border-white/5 bg-canvas/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link className="flex items-center gap-3" to="/">
            <div className="rounded-2xl border border-accent/20 bg-accent/10 p-2 text-accent">
              <TerminalSquare size={18} />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.32em] text-accent/80">
                CLI Gift Experience
              </p>
              <p className="text-sm text-inkMuted">Playable gift studio</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                className={({ isActive }) =>
                  cn(
                    'rounded-2xl px-4 py-2 text-sm text-inkMuted transition hover:text-ink',
                    isActive && 'bg-panelAlt text-ink',
                  )
                }
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button to="/order">Order now</Button>
          </div>

          <button
            className="rounded-2xl border border-line p-3 text-inkMuted md:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            <Menu size={18} />
          </button>
        </div>
        {open ? (
          <div className="border-t border-white/5 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  className="rounded-2xl bg-panel px-4 py-3 text-sm text-inkMuted"
                  onClick={() => setOpen(false)}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              ))}
              <Button className="mt-2 w-full" to="/order">
                Order now
              </Button>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-inkMuted sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent/80">Studio</p>
            <p className="mt-2 max-w-xl leading-6">{footerBlurb}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <Link key={item.href} className="transition hover:text-ink" to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
