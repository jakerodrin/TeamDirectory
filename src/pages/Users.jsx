import { useEffect, useState } from 'react'
import { users as allUsers } from '../data/users'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

/**
 * Lists all users.
 * - useEffect (empty dependency array) simulates fetching with a 1s setTimeout.
 * - Controlled search input filters users by name as you type.
 * - Document title shows how many users are currently displayed.
 */
function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Load users once, after a 1-second simulated delay.
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(allUsers)
      setIsLoading(false)
    }, 1000)

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
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Users</h1>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search users by name..."
        className="mt-4 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
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
