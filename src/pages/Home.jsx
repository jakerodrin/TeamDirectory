import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function Home() {
  const navigate = useNavigate()

  return (
    <section className="py-16 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-fg">
        Team Directory
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
        Browse your teammates, search them by name, mark your favorites and
        open their details.
      </p>
      <div className="mt-8 flex justify-center">
        <Button label="View users" onClick={() => navigate('/users')} />
      </div>
      <button
        type="button"
        onClick={() => navigate('/about')}
        className="mt-4 cursor-pointer text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg"
      >
        About this app
      </button>
    </section>
  )
}

export default Home
