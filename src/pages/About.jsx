function About() {
  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight text-fg">About</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted">
        Team Directory is a small React app for browsing a team of people. It
        was built with Vite, React Router and Tailwind CSS, using only local
        data.
      </p>
      <ul className="mt-5 space-y-2 text-sm text-muted">
        {[
          'React Router for client-side navigation (no page reloads)',
          'Reusable components that receive data through props',
          'useState for search, favorites and dark mode',
          'useEffect for loading data and updating the document title',
        ].map((item) => (
          <li key={item} className="flex gap-2.5">
            <span aria-hidden="true" className="text-fg">
              &ndash;
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
