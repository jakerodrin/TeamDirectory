import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-fg">404</h1>
      <p className="mt-3 text-sm text-muted">This page does not exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block text-sm font-medium text-accent underline decoration-border underline-offset-4 transition-opacity hover:opacity-70"
      >
        Back to home
      </Link>
    </section>
  )
}

export default NotFound
