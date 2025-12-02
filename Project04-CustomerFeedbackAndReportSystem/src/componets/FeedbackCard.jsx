import React from "react";

const FeedbackCard = ({ fb }) => {
  return (
    <div className="bg-white shadow p-5 rounded-xl mb-4">
      <h3 className="text-lg font-bold">{fb.fullName}</h3>
      <p className="text-sm text-gray-600">{fb.email}</p>

      <div className="flex gap-3 mt-2">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded">{fb.category}</span>
        <span className="px-3 py-1 bg-red-100 text-red-700 rounded">{fb.priority}</span>
      </div>

      <p className="mt-3">{fb.description}</p>

      {fb.screenshot && (
        // show only if valid string
        <img src={fb.screenshot} alt="Screenshot" className="mt-3 rounded border" />
      )}

      <div className="mt-3">
        <h4 className="font-semibold">Steps to Reproduce</h4>
        <ul className="list-disc ml-5">
          {Array.isArray(fb.steps) && fb.steps.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>

      <div className="mt-3">
        <h4 className="font-semibold">Suggestions</h4>
        <ul className="list-disc ml-5">
          {Array.isArray(fb.suggestions) && fb.suggestions.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      </div>

      <p className="text-sm text-gray-400 mt-3">{fb.time}</p>
    </div>
  );
};

export default FeedbackCard;
