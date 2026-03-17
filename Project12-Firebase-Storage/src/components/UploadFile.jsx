import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDocument } from "../feature/FileSlice";

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.documents);

  const toBase64 = (file) =>
    new Promise((res, rej) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => res(reader.result);
      reader.onerror = (err) => rej(err);
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("Select file first!");

    const base64 = await toBase64(selectedFile);

    const metadata = {
      title: selectedFile.name,
      type: selectedFile.type,
      size: (selectedFile.size / 1024).toFixed(1) + " KB",
      createdAt: new Date().toLocaleString(),
    };

    dispatch(addDocument({ metadata, base64 }));
    setSelectedFile(null);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow mb-6">
      <h2 className="text-lg font-bold mb-3">Upload New Document</h2>

      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
          className="border p-2 rounded w-full"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
    </div>
  );
};

export default UploadFile;
