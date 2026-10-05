import { Link, NavLink } from 'react-router-dom'
import Button from './Button'

// Nav links live in one place instead of being hardcoded three times.
const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/users', label: 'Users' },
  { to: '/about', label: 'About' },
]

const linkClass = ({ isActive }) =>
  `rounded-md px-2.5 py-1.5 text-sm transition-colors ${
    isActive ? 'font-semibold text-fg' : 'text-muted hover:text-fg'
  }`

function SunIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  )
}

/**
 * Top navigation bar.
 * NavLink gives each link an "active" style so the current page stands out.
 * Also shows the favorites count and the dark-mode toggle (Button component).
 */
function Navbar({ favoritesCount, isDark, onToggleDark }) {
  return (
    <header className="border-b border-border bg-surface">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-3.5">
        <Link to="/" className="text-sm font-semibold tracking-tight text-fg">
          Team Directory
        </Link>

        <div className="flex items-center gap-1">
          {NAV_LINKS.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} className={linkClass}>
              {label}
            </NavLink>
          ))}

          <span className="ml-2 rounded-full border border-border px-2.5 py-1 text-xs text-muted">
            Favorites: {favoritesCount}
          </span>

          <div className="ml-1">
            <Button
              onClick={onToggleDark}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
