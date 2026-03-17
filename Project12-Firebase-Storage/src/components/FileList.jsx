import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDocuments, removeDocument } from "../feature/FileSlice";

const FileList = () => {
  const dispatch = useDispatch();
  const { documents, isLoading } = useSelector((state) => state.documents);
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(loadDocuments());
  }, [dispatch]);

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(query.toLowerCase()),
  );

  if (isLoading) return <p>Loading files...</p>;

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-lg">Documents</h2>

        <input
          placeholder="Search..."
          className="border px-3 py-1 rounded"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <table className="w-full text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Preview</th>
            <th>Name</th>
            <th>Type</th>
            <th>Size</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredDocs.map((doc) => (
            <tr key={doc.id} className="border-t text-center">
              <td className="p-2">
                {doc.type?.includes("image") ? (
                  <img src={doc.content} className="h-10 mx-auto" />
                ) : (
                  "📄"
                )}
              </td>

              <td>{doc.title}</td>
              <td>{doc.type}</td>
              <td>{doc.size}</td>

              <td>
                <a href={doc.content} download={doc.title}>
                  Download
                </a>
                <button
                  onClick={() => dispatch(removeDocument(doc.id))}
                  className="ml-3 text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
