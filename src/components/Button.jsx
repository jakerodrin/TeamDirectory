/**
 * Reusable button.
 * Props:
 *  - label:   text shown on the button (optional)
 *  - onClick: click handler (optional)
 *  - variant: "primary" (blue) or "danger" (red) — defaults to "primary"
 *  - children: anything else rendered inside the button (e.g. icons, text)
 */
function Button({ label, onClick, variant = 'primary', children }) {
  const variantStyles =
    variant === 'danger'
      ? 'bg-red-600 hover:bg-red-700 focus-visible:outline-red-600'
      : 'bg-blue-600 hover:bg-blue-700 focus-visible:outline-blue-600'

  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles}`}
    >
      {label}
      {children}
    </button>
  )
}

export default Button
