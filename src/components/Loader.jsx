/** Minimal spinner with a "Loading..." message. */
function Loader() {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-muted">
      <span className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
      <p className="text-sm">Loading...</p>
    </div>
  )
}

export default Loader
