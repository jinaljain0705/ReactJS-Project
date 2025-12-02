import React from "react";

import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ data }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Submitted Feedback</h2>

      {data.length === 0 ? (
        <p className="text-gray-500">No feedback submitted yet.</p>
      ) : (
        data.map((fb, i) => <FeedbackCard fb={fb} key={i} />)
      )}
    </div>
  );
};

export default FeedbackList;
