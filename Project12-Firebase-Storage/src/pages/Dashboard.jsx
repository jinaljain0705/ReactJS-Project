import { useSelector } from "react-redux";
import UploadFile from "../components/UploadFile";
import FileList from "../components/FileList";

const Dashboard = () => {
  const { documents } = useSelector((state) => state.documents);

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6">
        📁 Document Manager
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          Total: {documents.length}
        </div>

        <div className="bg-white p-4 rounded shadow">
          Images: {documents.filter(d => d.type?.includes("image")).length}
        </div>

        <div className="bg-white p-4 rounded shadow">
          PDFs: {documents.filter(d => d.type?.includes("pdf")).length}
        </div>
      </div>

      <UploadFile />
      <FileList />
    </div>
  );
};

export default Dashboard;
