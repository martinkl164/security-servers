import { Link, NavLink } from 'react-router-dom';
import BrandMark from './BrandMark';

type AppShellProps = {
  children: React.ReactNode;
};

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'px-3 py-2 rounded-md text-sm font-medium',
          isActive
            ? 'bg-emerald-100 text-emerald-900'
            : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-900',
        ].join(' ')
      }
    >
      {label}
    </NavLink>
  );
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="border-b border-emerald-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <BrandMark />
            <span className="text-lg font-semibold text-slate-900">
              Super Legit Bank
            </span>
          </Link>

          <nav aria-label="Primary" className="ml-auto flex gap-1">
            <NavItem to="/" label="Home" />
            <NavItem to="/login" label="Login" />
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>
      </main>

      <footer className="border-t border-emerald-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-600">
          Demo UI only — no real banking actions.
        </div>
      </footer>
    </div>
  );
}
