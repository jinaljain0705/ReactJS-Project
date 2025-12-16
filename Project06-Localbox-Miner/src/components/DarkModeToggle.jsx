import React from "react";

export default function DarkModeToggle ({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-300 dark:bg-gray-700 px-4 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  );
};

