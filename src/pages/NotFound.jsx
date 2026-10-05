import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="py-16 text-center">
      <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100">404</h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        Oops! This page does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Go back home
      </Link>
    </section>
  )
}

export default NotFound
