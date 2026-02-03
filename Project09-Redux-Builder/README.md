# 📝 Smart Task Manager (React + Tailwind CSS)

A simple and responsive Task Manager built using React.js, Redux Toolkit, React Redux, Tailwind CSS, and LocalStorage.
This project allows users to add, view, edit, toggle status, and delete tasks with a clean UI and predictable state management.

# 🚀 Features

➕ Add new tasks with title and priority

👁️ View all tasks in a structured list

✏️ Edit existing task details

🔃 Toggle task status (Pending / Completed)

🗑️ Delete tasks

💾 Persist tasks using LocalStorage

🎨 Modern UI using Tailwind CSS

# 🔹 Advanced Features

🔍 Search tasks by:

Title

🎯 Filter tasks by status:

Pending

Completed

🔃 Sort tasks by:

Priority (Low → High / High → Low)

# 🛠️ Technologies Used

React.js

Redux Toolkit

React Redux

JavaScript (ES6+)

Tailwind CSS

HTML5

LocalStorage

# 📂 Project Structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── tasks/
│       └── taskSlice.js
│
├── components/
│   ├── TaskForm.jsx
│   └── TaskList.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

# 🧭 Application Flow
                                                                   
| Page / Component       | Description                                       |
|------------------------|---------------------------------------------------|
| `/`                    | Dashboard / Overview                              |
| `/Add Task`            | Form to add new task (title + priority)           |
| `/View Tasks`          | View all tasks in a list with status and priority |
| `/Edit Task`           | Edit existing task details                        |
| `/Toggle Status`	     | Click task to mark as Pending / Completed         |
| `/Delete Task	`        | Remove task from list                             |

  
# 🔍 Search, Filter & Sort Logic
### 🔎 Search

Search is implemented using Array.filter() and checks:

Task Title

### 🎯 Filter

Tasks can be filtered by:

Pending

Completed

### 🔃 Sort

Sorting options include:

Priority (Low → High)

Priority (High → Low)

# 🔄 Application Flow
### 🏠 Home Page

Displays all tasks in a list format with priority and status badges.

### ➕ Add Task

Form to add task details:

Title

Priority (Low / Medium / High)

Status defaults to Pending

### 👁️ View Tasks

Displays all tasks with:

Task title

Priority

Status (Pending / Completed)

Edit and Delete actions

### ✏️ Edit Task

Allows updating task title and priority.

Form auto-fills task data for editing.

### 💾 LocalStorage Usage

All task data is stored in the browser’s LocalStorage.

Data remains available after page refresh.

Example key used:

```
tasks
```

# 🎨 UI Highlights

Responsive list layout

Status badge (Pending / Completed)

Hover effects for better UX

Clean form layout with validation-ready inputs

Edit-in-place functionality

# ▶️ How to Run the Project

### 1️⃣ Clone the repository

git clone <repository-url>


### 2️⃣ Install dependencies

npm install


### 5️⃣ Start the development server

npm run dev


### Open in browser:

```
http://localhost:5173
```

# 📌 Notes

This project uses LocalStorage, so no backend is required.

Best suited for learning Redux Toolkit, React Hooks, and state management.

Code is structured for easy understanding and scalability.

# 👨‍💻 Author

Jinal Jain

Full Stack Developer (React)

Project created for learning and academic purposes
