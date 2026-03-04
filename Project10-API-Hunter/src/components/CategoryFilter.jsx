function CategoryFilter({ categories, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      <button
        onClick={() => onSelect("all")}
        className="px-4 py-2 rounded hover:bg-gray-300"
      >
        All
      </button>

      {categories.map((cat, index) => (
        <button
          key={index}
          onClick={() => onSelect(cat)}
          className="px-4 py-2 rounded capitalize hover:bg-blue-200"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;