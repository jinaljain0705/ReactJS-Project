export default function CategoryFilter({ setCategory }) {
  return (
    <select
      className="border p-2 rounded"
      onChange={(e) => setCategory(e.target.value)}
    >
      <option value="" className="bg-black text-white">All</option>
      <option value="Electronics" className="bg-black text-white">Electronics</option>
      <option value="Food" className="bg-black text-white">Food</option>
      <option value="Clothing" className="bg-black text-white">Clothing</option>
    </select>
  );
}
