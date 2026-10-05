import { Link } from 'react-router-dom'
import Button from './Button'

function StarIcon({ filled }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01Z" />
    </svg>
  )
}

/**
 * Card for a single user.
 * Props are destructured: name, email, company, isFavorite, onToggleFavorite
 * (plus id, needed for the details link and the favorite toggle).
 */
function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border border-border bg-surface p-5">
      <div>
        <h3 className="font-semibold text-fg">{name}</h3>
        <p className="mt-1 text-sm text-muted">{email}</p>
        <p className="mt-0.5 text-sm text-muted">{company}</p>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <Button
          onClick={() => onToggleFavorite(id)}
          variant={isFavorite ? 'danger' : 'primary'}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <StarIcon filled={isFavorite} />
        </Button>
        <Link
          to={`/users/${id}`}
          className="text-sm font-medium text-fg transition-opacity hover:opacity-70"
        >
          Details
        </Link>
      </div>
    </div>
  )
}

export default UserCard
