import React from "react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="my-4 flex justify-center">
      <input
        type="text"
        placeholder="Search records..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"/>
    </div>
  );
};


