/** Simple animated spinner with a "Loading..." message. */
function Loader() {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-slate-500 dark:text-slate-400">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      <p className="text-sm font-medium">Loading...</p>
    </div>
  )
}

export default Loader
