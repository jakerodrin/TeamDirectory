/**
 * Reusable button.
 * Props:
 *  - label:   text shown on the button (optional)
 *  - onClick: click handler (optional)
 *  - variant: "primary" or "danger" — defaults to "primary"
 *  - title:   tooltip / accessible name (useful for icon-only buttons)
 *  - children: anything else rendered inside the button (e.g. icons)
 */
function Button({ label, onClick, variant = 'primary', title, children }) {
  const variantStyles =
    variant === 'danger' ? 'bg-danger text-white' : 'bg-accent text-accent-fg'

  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium transition-opacity hover:opacity-80 ${variantStyles}`}
    >
      {label}
      {children}
    </button>
  )
}

export default Button
