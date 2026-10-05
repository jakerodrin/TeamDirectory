/** Subtle warning box used when something goes wrong or a list is empty. */
function ErrorMessage({ message = 'Something went wrong.' }) {
  return (
    <div className="rounded-lg border border-danger/40 bg-danger/5 px-4 py-5 text-center text-sm font-medium text-danger">
      {message}
    </div>
  )
}

export default ErrorMessage
