export function Button({ children, asChild, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded focus:outline-none focus:ring-2 focus:bg-purple-400"
      {...props}
    >
      {children}
    </button>
  );
}