export default function Pagination({ total, page, setPage, limit }) {
  const pages = Math.ceil(total / limit);

  return (
    <div className="flex gap-2 mt-4">
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Prev
      </button>

      {[...Array(pages)].map((_, i) => (
        <button key={i} onClick={() => setPage(i + 1)}>
          {i + 1}
        </button>
      ))}

      <button onClick={() => setPage(page + 1)} disabled={page === pages}>
        Next
      </button>
    </div>
  );
}
