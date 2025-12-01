import { useRef, useState } from "react";

const StudentForm = ({ addStudent }) => {
  const nameRef = useRef();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();

    if (!name) {
      setError("Please enter a student name.");
      nameRef.current.focus();
      return;
    }

    addStudent(name);
    nameRef.current.value = "";
    setError("");
    nameRef.current.focus();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 items-start mb-5 bg-white p-4 rounded-xl shadow"
      >
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter student name..."
          className="border rounded-lg px-4 py-2 w-full outline-blue-500"
          autoFocus
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      {error && (
        <p className="text-red-600 font-medium text-sm -mt-3 mb-4">{error}</p>
      )}
    </>
  );
};

export default StudentForm;
