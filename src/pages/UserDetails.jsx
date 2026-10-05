import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { users } from '../data/users'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Button from '../components/Button'

/**
 * Details for a single user.
 * - useParams reads the :id from the URL.
 * - useEffect depends on [id], so it re-runs (and re-finds the user) whenever
 *   the id changes.
 * - Document title is set to the user's name.
 */
function UserDetails({ favorites, onToggleFavorite }) {
  const { id } = useParams()
  // Holds the last loaded result: which id was loaded and the matching user.
  const [loaded, setLoaded] = useState({ id: null, user: null })

  // Derived during render (no extra state): while the id on screen has not
  // been loaded yet, we are loading.
  const isLoading = loaded.id !== id

  // Re-runs whenever :id changes, finds the matching user after a short
  // simulated delay, and stores it together with the id it belongs to.
  useEffect(() => {
    const timer = setTimeout(() => {
      const found = users.find((candidate) => candidate.id === Number(id))
      setLoaded({ id, user: found ?? null })
    }, 500)

    return () => clearTimeout(timer)
  }, [id])

  // Keep the browser tab title in sync: the user's name, or a fallback.
  useEffect(() => {
    if (isLoading) {
      document.title = 'Loading...'
    } else {
      document.title = loaded.user ? loaded.user.name : 'User not found'
    }
  }, [isLoading, loaded.user])

  if (isLoading) {
    return <Loader />
  }

  if (!loaded.user) {
    return <ErrorMessage message="User not found" />
  }

  const user = loaded.user

  const isFavorite = favorites.includes(user.id)

  return (
    <section className="mx-auto max-w-md">
      <Link
        to="/users"
        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
      >
        ← Back to Users
      </Link>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-200">
          {user.name.charAt(0)}
        </div>
        <h1 className="mt-4 text-2xl font-bold text-slate-900 dark:text-slate-100">
          {user.name}
        </h1>
        <dl className="mt-6 space-y-3 text-left">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Email</dt>
            <dd className="text-slate-800 dark:text-slate-200">{user.email}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Company</dt>
            <dd className="text-slate-800 dark:text-slate-200">{user.company}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Role</dt>
            <dd className="text-slate-800 dark:text-slate-200">{user.role}</dd>
          </div>
        </dl>
        <div className="mt-6 flex justify-center gap-3">
          <Button
            onClick={() => onToggleFavorite(user.id)}
            variant={isFavorite ? 'danger' : 'primary'}
            label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          />
        </div>
      </div>
    </section>
  )
}

export default UserDetails
