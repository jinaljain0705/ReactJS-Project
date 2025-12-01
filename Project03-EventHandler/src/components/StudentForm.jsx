import { useRef, useState } from "react";

const StudentForm = ({ addStudent }) => {
  const nameRef = useRef();
  const courseRef = useRef();
  const phoneRef = useRef();

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const course = courseRef.current.value.trim();
    const phone = phoneRef.current.value.trim();

    // Validation
    if (!name || !course || !phone) {
      setError("All fields are required.");
      nameRef.current.focus();
      return;
    }

    if (phone.length < 10) {
      setError("Phone number must be at least 10 digits.");
      phoneRef.current.focus();
      return;
    }

    // Passing data to parent
    addStudent({ name, course, phone });

    // Reset fields
    nameRef.current.value = "";
    courseRef.current.value = "";
    phoneRef.current.value = "";

    setError("");
    nameRef.current.focus();
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-6">Add Student</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-5 rounded-xl shadow"
      >
        {/* Name */}
        <input
          ref={nameRef}
          type="text"
          placeholder="Enter Student Name..."
          className="border rounded-lg px-4 py-2 w-full outline-blue-500"
          autoFocus
        />

        {/* Course */}
        <input
          ref={courseRef}
          type="text"
          placeholder="Enter Course Name..."
          className="border rounded-lg px-4 py-2 w-full outline-blue-500"
        />

        {/* Phone */}
        <input
          ref={phoneRef}
          type="number"
          placeholder="Enter Phone Number..."
          className="border rounded-lg px-4 py-2 w-full outline-blue-500"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="md:col-span-3 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>

      {/* Error Message */}
      {error && (
        <p className="text-red-600 font-medium text-sm mt-3">{error}</p>
      )}
    </>
  );
};

export default StudentForm;
