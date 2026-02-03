import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleStatus, editTask } from "../features/tasks/taskSlice";
import { useState } from "react";

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.list);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editPriority, setEditPriority] = useState("Medium");

  const startEdit = (task) => {
    setEditId(task.id);
    setEditTitle(task.title);
    setEditPriority(task.priority);
  };

  const saveEdit = (id) => {
    dispatch(editTask({ id, title: editTitle, priority: editPriority }));
    setEditId(null);
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className="border p-3 mb-2">
          {editId === task.id ? (
            <>
              <input
                className="border p-1 w-full mb-2"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />

              <select
                className="border p-1 w-full mb-2"
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>

              <button
                onClick={() => saveEdit(task.id)}
                className="bg-green-500 text-white px-3 mr-2"
              >
                Save
              </button>
            </>
          ) : (
            <>
              <div
                className={`cursor-pointer ${
                  task.status === "Completed"
                    ? "line-through text-gray-400"
                    : ""
                }`}
                onClick={() => dispatch(toggleStatus(task.id))}
              >
                <strong>{task.title}</strong> — {task.priority}  
                <span className="ml-2 text-sm">[{task.status}]</span>
              </div>

              <div className="mt-2">
                <button
                  onClick={() => startEdit(task)}
                  className="text-blue-500 mr-3"
                >
                  Edit
                </button>

                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
