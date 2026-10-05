import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function Home() {
  const navigate = useNavigate()

  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Welcome to the Team Directory
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-300">
        Browse your teammates, search them by name, mark your favorites and open
        their details — all stored locally, no API needed.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button label="View all users" onClick={() => navigate('/users')} />
        <Button label="Learn about this app" onClick={() => navigate('/about')} variant="danger" />
      </div>
    </section>
  )
}

export default Home
