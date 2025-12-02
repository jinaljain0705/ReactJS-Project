import React, { useRef, useState } from "react";
import DynamicList from "./DynamicList";

const FeedbackForm = ({ addFeedback }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const [steps, setSteps] = useState([""]);
  const [suggestions, setSuggestions] = useState([""]);

  const screenshotRef = useRef(null);
  const notesRef = useRef(null);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const err = {};
    if (!fullName.trim()) err.fullName = "Full name is required";
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      err.email = "Enter a valid email";
    if (!category) err.category = "Select a category";
    if (!priority) err.priority = "Select a priority";
    if ((description || "").length < 10)
      err.description = "Description must be at least 10 characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const feedback = {
      fullName,
      email,
      category,
      priority,
      description,
      steps,
      suggestions,
      screenshot: screenshotRef.current ? screenshotRef.current.value : "",
      notes: notesRef.current ? notesRef.current.value : "",
      time: new Date().toLocaleString(),
    };

    addFeedback(feedback);

    setFullName("");
    setEmail("");
    setCategory("");
    setPriority("");
    setDescription("");
    setSteps([""]);
    setSuggestions([""]);
    if (screenshotRef.current) screenshotRef.current.value = "";
    if (notesRef.current) notesRef.current.value = "";
    setErrors({});
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white shadow-lg p-6 rounded-xl mb-8 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Submit Your Feedback</h2>

      <label className="block font-medium">Full Name</label>
      <input
        type="text"
        className={`border p-2 rounded w-full mb-1 ${
          errors.fullName ? "border-red-500" : ""
        }`}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)} />
      {errors.fullName && (
        <p className="text-red-500 text-sm mb-2">{errors.fullName}</p>
      )}

      <label className="block font-medium">Email</label>
      <input
        type="email"
        className={`border p-2 rounded w-full mb-1 ${
          errors.email ? "border-red-500" : ""
        }`}
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      {errors.email && (
        <p className="text-red-500 text-sm mb-2">{errors.email}</p>
      )}

      <label className="block font-medium">Issue Category</label>
      <select
        className={`border p-2 rounded w-full mb-1 ${
          errors.category ? "border-red-500" : ""
        }`}
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select...</option>
        <option value="Bug">Bug</option>
        <option value="Suggestion">Suggestion</option>
        <option value="Complaint">Complaint</option>
        <option value="Other">Other</option>
      </select>
      {errors.category && (
        <p className="text-red-500 text-sm mb-2">{errors.category}</p>
      )}

      <label className="block font-medium">Priority</label>
      <select
        className={`border p-2 rounded w-full mb-1 ${
          errors.priority ? "border-red-500" : ""
        }`}
        value={priority}
        onChange={(e) => setPriority(e.target.value)}>
        <option value="">Select...</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      {errors.priority && (
        <p className="text-red-500 text-sm mb-2">{errors.priority}</p>
      )}

      <label className="block font-medium">Description</label>
      <textarea
        className={`border p-2 rounded w-full mb-1 ${
          errors.description ? "border-red-500" : ""
        }`}
        value={description}
        onChange={(e) => setDescription(e.target.value)} />
      {errors.description && (
        <p className="text-red-500 text-sm mb-2">{errors.description}</p>
      )}

      <DynamicList label="Steps to Reproduce" values={steps} setValues={setSteps} />
      <DynamicList label="Suggested Improvements" values={suggestions} setValues={setSuggestions} />

      <label className="block font-medium">Screenshot URL (Optional)</label>
      <input type="text" ref={screenshotRef} className="border p-2 rounded w-full mb-4" />

      <label className="block font-medium">Additional Notes</label>
      <textarea ref={notesRef} className="border p-2 rounded w-full mb-4" />

      <button
        type="submit"
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
