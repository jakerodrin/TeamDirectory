import { Link, NavLink } from 'react-router-dom'
import Button from './Button'

/**
 * Top navigation bar.
 * NavLink gives each link an "active" style so the current page stands out.
 * Also shows the favorites count and the dark-mode toggle (Button component).
 */
function Navbar({ favoritesCount, isDark, onToggleDark }) {
  const linkClass = ({ isActive }) =>
    `rounded-md px-3 py-1.5 text-sm transition-colors ${
      isActive
        ? 'font-bold text-blue-600 underline decoration-2 underline-offset-4 dark:text-blue-400'
        : 'text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'
    }`

  return (
    <header className="bg-white shadow dark:bg-slate-800">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <Link
          to="/"
          className="text-lg font-bold text-slate-900 dark:text-slate-100"
        >
          🧑‍💼 Team Directory
        </Link>

        <div className="flex flex-wrap items-center gap-1">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/users" className={linkClass}>
            Users
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <span className="ml-2 rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
            Favorites: {favoritesCount}
          </span>

          <div className="ml-2">
            <Button onClick={onToggleDark} variant={isDark ? 'danger' : 'primary'}>
              {isDark ? '☀️ Light' : '🌙 Dark'}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
