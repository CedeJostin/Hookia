export function Button({ children, asChild, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-navy-600 hover:bg-navy-700 text-white rounded focus:outline-none focus:ring-2 focus:bg-navy-400"
      {...props}
    >
      {children}
    </button>
  );
}