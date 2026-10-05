import { useEffect, useState } from 'react'
import { users as allUsers } from '../data/users'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

const SIMULATED_LOAD_MS = 1000

/**
 * Lists all users.
 * - useEffect (empty dependency array) simulates fetching with a delay.
 * - Controlled search input filters users by name as you type.
 * - Document title shows how many users are currently displayed.
 */
function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Load users once, after a short simulated delay.
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(allUsers)
      setIsLoading(false)
    }, SIMULATED_LOAD_MS)

    // Cleanup so the timer never fires after the component unmounts.
    return () => clearTimeout(timer)
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.trim().toLowerCase()),
  )

  // Update the browser tab title whenever the number of displayed users changes.
  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`
  }, [filteredUsers.length])

  if (isLoading) {
    return <Loader />
  }

  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tight text-fg">Users</h1>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by name"
        className="mt-5 w-full rounded-md border border-border bg-surface px-3.5 py-2 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none"
      />

      {filteredUsers.length === 0 ? (
        <div className="mt-6">
          <ErrorMessage message="No users found" />
        </div>
      ) : (
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <UserCard
                id={user.id}
                name={user.name}
                email={user.email}
                company={user.company}
                isFavorite={favorites.includes(user.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Users
