# 🎓 Student Activity Manager

A React + TailwindCSS based mini-project designed to help students learn & practice core React fundamentals, including Events, State, Props, Refs, Conditional Rendering, Fragments, and Argument Passing.

This project runs 100% on client-side React state — no backend or database required.

# 📌 Project Overview

Student Activity Manager allows users to:

Add students

Validate input fields

Mark attendance (Present/Absent)

Toggle extra details

Delete students

View real-time dashboard stats

All UI updates instantly using React’s Virtual DOM.

# 🧠 React Concepts Covered
# ⚛️ Core Topics

Event Handling (onChange, onClick, onSubmit)

Passing Arguments in Events

Conditional Rendering

Using Refs (DOM Access)

React Fragments (<> ... </>)

useState Hook

Props & Component Communication

List Rendering (map)

State Lifting

ES6 (Spread Operator, Arrow Functions)

# 📂 Project Structure
```
src/
 ┣ components/
 ┃ ┣ StudentForm.jsx      // Add students + Refs + Validation
 ┃ ┣ StudentList.jsx      // Rendering students using map()
 ┃ ┗ StudentCard.jsx      // Toggle, delete, attendance features
 ┣ App.jsx                // Main state & dashboard
 ┗ index.css              // TailwindCSS import
``` 
# 🚀 Features
✔ Add Students

Uses useRef for autofocus

Input validation

Auto-clear after submit

✔ Student List

Rendered dynamically via map()

Clean UI using TailwindCSS

✔ Toggle More Details

Show/hide extra information per student.

✔ Attendance System

Mark each student as:

🟢 Present

🔴 Absent

Changes reflect in real-time dashboard.

✔ Delete Student

Instantly removes student from list.

✔ Dashboard Summary

Automatically updates:

Total Students

Present Students

Absent Students

# 🖥️ Screenshots

📌 Home Page
![Home Page](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project03-EventHandler/src/assets/Screenshot/Screenshot%202025-12-01%20162542.png)

📌 Add Student Form and list
![Add Form and list](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project03-EventHandler/src/assets/Screenshot/Screenshot%202025-12-01%20164004.png)

# 🛠 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/YOUR-USERNAME/Student-Activity-Manager.git
cd Student-Activity-Manager

2️⃣ Install Dependencies
npm install

# 🎨 TailwindCSS Setup (Exactly How Your Screenshot Shows)
🟦 Step 1 — Create Vite Project
npm create vite@latest my-project
cd my-project

🟦 Step 2 — Install TailwindCSS + Plugin
npm install tailwindcss @tailwindcss/vite

🟦 Step 3 — Configure Vite Plugin

Create/edit vite.config.js:
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```
🟦 Step 4 — Import Tailwind in index.css
@import "tailwindcss";

🟦 Step 5 — Start Your Dev Server
npm run dev

▶️ Run Project
npm run dev

# Open in Browser
Vite will show a local URL like:
```
http://localhost:5173/
```
Created By:

Jinal Jain
