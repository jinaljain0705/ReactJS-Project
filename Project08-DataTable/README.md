# 🧑‍💼 Employee Management System (React + Tailwind CSS)

A simple and responsive Employee Management System built using React.js, React Router DOM, Tailwind CSS, and LocalStorage.
This project allows users to add, view, edit, and delete employee records with a clean UI and smooth navigation.

# 🚀 Features

➕ Add new employee details

👁️ View all employees in a structured table

✏️ Edit existing employee information

🗑️ Delete employee records

🖼️ Upload & display employee profile image

💾 Data persistence using LocalStorage

🎨 Modern UI using Tailwind CSS

🔀 Page navigation using React Router DOM

# 🔹 Advanced Features

### 🔍 Search employees by:

Name

Email

Department

### 🎯 Filter employees by status:

Active

Inactive

### 🔃 Sort employees by:

Name (Ascending / Descending)

Salary (Ascending / Descending)


# 🛠️ Technologies Used

```
React.js

React Router DOM

Tailwind CSS

JavaScript (ES6)

HTML5

LocalStorage
```

# 📂 Project Structure

```
src/
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── AddEmployee.jsx
│   ├── EditEmployee.jsx
│   └── ViewEmployee.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```
# 🧭 Application Routes

Route	                 Description

`/`	                     Dashboard / Overview
`/add`	                 Add New Employee
`/view`                  View Employee List
`/edit/:id`	             Edit Employee Details

# 🔍 Search, Filter & Sort Logic

### 🔎 Search

Search is implemented using Array.filter() and checks:

Employee Name

Email

Department

### 🎯 Filter

Employees can be filtered by:

All

Active

Inactive

### 🔃 Sort

Sorting options include:

Name (A → Z)

Name (Z → A)

Salary (Low → High)

Salary (High → Low)


# 🔄 Application Flow

### 🏠 Home Page

Displays an employee overview in card format.

Shows basic employee details with profile images.

### ➕ Add Employee

Form to add employee details such as:

Name

Email

Phone

Department

Designation

Salary

Status (Active / Inactive)

Profile Image

### 👁️ View Employee

Displays all employees in a tabular format.

Shows complete employee information.

Provides Edit and Delete actions.

### ✏️ Edit Employee

Allows updating existing employee information.

Automatically pre-fills employee data using route parameter (id).

# 💾 LocalStorage Usage

All employee data is stored in the browser’s LocalStorage.

Data remains available even after page refresh.

### Example key used:

```
Employees
```

# 🎨 UI Highlights

Responsive table layout

Status badge (Active / Inactive)

Rounded profile images

Hover effects for better UX

Clean form layout with validation-ready inputs

# ▶️ How to Run the Project

### 1️⃣Clone the repository

```
git clone <repository-url>
```

### 2️⃣Install dependencies

```
npm install
```

### 3️⃣ Install Tailwind CSS (Vite Plugin Method)

```
npm install tailwindcss @tailwindcss/vite
```

Configure Vite Plugin (`vite.config.js`)

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

Import Tailwind CSS (`src/index.css`)

```
@import "tailwindcss";
```

Import CSS in Entry File (`main.jsx`)

```
import './index.css';
```

### 4️⃣Start the development server

```
npm run dev
```

Open in browser

```
http://localhost:5173
```

# 📌 Notes

This project uses LocalStorage, so no backend is required.

Best suited for learning CRUD operations, React Hooks, and Routing.

Code is structured for easy understanding and scalability.

# 📸 Screens Included 

### Search

 ![search]()

### Filter

![filter]()

### Sort

![sort]()

# 👨‍💻 Author

Jinal Jain

Full Stack Developer (React)

Project created for learning and academic purposes.
