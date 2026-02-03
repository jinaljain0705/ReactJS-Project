import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    dispatch(addTask(title, priority));
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        className="border p-2 flex-1"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-2"
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="bg-black text-white px-4">Add</button>
    </form>
  );
};

export default TaskForm;
