import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadTasks = () => {
  const data = localStorage.getItem("tasks");
  return data ? JSON.parse(data) : [];
};

const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: loadTasks(),
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.list.push(action.payload);
        saveTasks(state.list);
      },
      prepare(title, priority) {
        return {
          payload: {
            id: nanoid(),
            title,
            priority,
            status: "Pending",
          },
        };
      },
    },

    toggleStatus(state, action) {
      const task = state.list.find(t => t.id === action.payload);
      if (task) {
        task.status = task.status === "Pending" ? "Completed" : "Pending";
        saveTasks(state.list);
      }
    },

    editTask(state, action) {
      const { id, title, priority } = action.payload;
      const task = state.list.find(t => t.id === id);
      if (task) {
        task.title = title;
        task.priority = priority;
        saveTasks(state.list);
      }
    },

    deleteTask(state, action) {
      state.list = state.list.filter(t => t.id !== action.payload);
      saveTasks(state.list);
    },
  },
});

export const { addTask, toggleStatus, editTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
