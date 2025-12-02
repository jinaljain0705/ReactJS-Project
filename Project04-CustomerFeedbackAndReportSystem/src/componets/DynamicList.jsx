import React from "react";

const DynamicList = ({ label, values = [""], setValues }) => {
  const addItem = () => setValues([...values, ""]);
  const removeItem = (i) => {
    if (values.length === 1) {
      setValues([""]);
      return;
    }
    setValues(values.filter((_, index) => index !== i));
  };

  const updateItem = (i, value) => {
    const updated = [...values];
    updated[i] = value;
    setValues(updated);
  };

  return (
    <div className="mb-4">
      <label className="block font-medium mb-2">{label}</label>

      {values.map((item, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            type="text"
            className="border p-2 rounded w-full"
            value={item}
            onChange={(e) => updateItem(i, e.target.value)}
          />
          <button type="button" onClick={() => removeItem(i)} className="px-3 bg-red-500 text-white rounded">
            ✕
          </button>
        </div>
      ))}

      <button type="button" onClick={addItem} className="mt-2 text-sm px-3 py-1 bg-blue-500 text-white rounded">
        + Add
      </button>
    </div>
  );
};

export default DynamicList;