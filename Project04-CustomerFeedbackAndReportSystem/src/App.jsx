import React, { useState } from "react";
import FeedbackForm from "./componets/FeedbackForm";
import FeedbackList from "./componets/FeedbackList";
import "./App.css";

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const addFeedback = (fb) => {
    setFeedbacks((prev) => [fb, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <FeedbackForm addFeedback={addFeedback} />
      <FeedbackList data={feedbacks} />
    </div>
  );
}

export default App;
