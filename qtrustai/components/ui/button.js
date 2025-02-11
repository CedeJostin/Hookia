export function Button({ children, asChild, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    >
      {children}
    </button>
  );
}