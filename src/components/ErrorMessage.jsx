/** Red warning box used when something goes wrong or a list is empty. */
function ErrorMessage({ message = 'Something went wrong.' }) {
  return (
    <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-6 text-center text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300">
      <p className="font-medium">{message}</p>
    </div>
  )
}

export default ErrorMessage
