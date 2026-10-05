function About() {
  return (
    <section className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">About</h1>
      <div className="mt-4 space-y-4 text-slate-600 dark:text-slate-300">
        <p>
          <strong className="text-slate-900 dark:text-slate-100">Team Directory</strong> is a
          small React app for browsing a team of people. It was built with Vite,
          React Router and Tailwind CSS.
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>React Router for client-side navigation (no page reloads)</li>
          <li>Reusable components that receive data through props</li>
          <li>useState for search, favorites and dark mode</li>
          <li>useEffect for loading data and updating the document title</li>
          <li>100% local data — no API calls</li>
        </ul>
      </div>
    </section>
  )
}

export default About
