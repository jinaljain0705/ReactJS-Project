export default function SearchBar({ setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Products..."
      className="border p-2 rounded w-full"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
