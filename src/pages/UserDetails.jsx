import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { users } from '../data/users'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Button from '../components/Button'

const FIND_DELAY_MS = 500

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
    }, FIND_DELAY_MS)

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
        className="text-sm text-accent transition-opacity hover:opacity-70"
      >
        Back to users
      </Link>

      <div className="mt-4 rounded-lg border border-border bg-surface p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-border text-xl font-semibold text-fg">
          {user.name.charAt(0)}
        </div>
        <h1 className="mt-4 text-xl font-semibold tracking-tight text-fg">
          {user.name}
        </h1>

        <dl className="mt-6 space-y-4 text-left">
          {[
            { term: 'Email', value: user.email },
            { term: 'Company', value: user.company },
            { term: 'Role', value: user.role },
          ].map(({ term, value }) => (
            <div key={term} className="flex justify-between gap-6">
              <dt className="text-sm text-muted">{term}</dt>
              <dd className="text-sm font-medium text-fg">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 border-t border-border pt-5">
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
