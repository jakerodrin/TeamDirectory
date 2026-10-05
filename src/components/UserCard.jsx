import { Link } from 'react-router-dom'
import Button from './Button'

/**
 * Card for a single user.
 * Props are destructured: name, email, company, isFavorite, onToggleFavorite
 * (plus id, needed for the "View Details" link and the favorite toggle).
 */
function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
      <div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            {name}
          </h3>
          {isFavorite && (
            <span title="Favorite" aria-hidden="true">
              ⭐
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{email}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{company}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button
          onClick={() => onToggleFavorite(id)}
          variant={isFavorite ? 'danger' : 'primary'}
          label={isFavorite ? 'Remove favorite' : 'Add to favorites'}
        />
        <Link
          to={`/users/${id}`}
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        >
          View Details →
        </Link>
      </div>
    </div>
  )
}

export default UserCard
