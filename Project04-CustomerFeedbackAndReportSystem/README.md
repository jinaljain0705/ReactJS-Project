# 📄 Feedback Form App – README (Tailwind + Vite Plugin + React)

A simple and elegant Feedback Form Application built using React, Tailwind CSS (via Vite plugin), and core React concepts like Events, Refs, and Argument Passing.
This project demonstrates how to build interactive forms using clean UI and reusable components.

# 🚀 Project Description

This mini-project allows a user to:

Fill out a feedback form

Enter name, email, message, rating, and check agreement

Submit the details

View the collected feedback

Understand how React Events, Refs, and Argument Passing work in real projects

It is fully client-side and does not use any backend or database.

# 🛠 Tech Stack

⚛️ React

🎨 Tailwind CSS (via Vite plugin)

⚡ Vite

🧩 React Hooks (useState, useRef)

🧭 React Events & Handlers

# 📁 Folder Structure

```
FeedbackFormApp/
│
├── src/
│   ├── components/
│   │   ├── FeedbackForm.jsx
│   │   ├── FeedbackList.jsx
│   │   └── RatingStars.jsx   (optional)
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/
├── vite.config.js
├── package.json
└── README.md
```

# 🎯 Features
# ✅ Using Refs in React

This project includes examples like:

```
const nameRef = useRef();
nameRef.current.focus();
```

Used to auto-focus the first input field.

# ✅ Passing Arguments to Event Handlers

```
onClick={() => handleDelete(id)}
```

Used in FeedbackList to delete a specific feedback.

# ✅ React Events Used

onChange – Handling input changes

onSubmit – Form submission

onClick – Buttons

onBlur – Optional validations

All events follow clean, best-practice patterns.

# 🎨 Tailwind CSS Setup (Using Vite Plugin)

Tailwind is installed using the modern Vite plugin method, same as your example.

01. Create a New Vite Project

```
npm create vite@latest feedback-form-app
cd feedback-form-app
```

02. Install Tailwind & Plugin

```
npm install tailwindcss @tailwindcss/vite
```

03. Configure the Vite Plugin

vite.config.js

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

04. Import Tailwind Into CSS

index.css

```
@import "tailwindcss";
```

05. Run the Server
  
```
npm run dev
```

06. Start Using Tailwind Classes

```
<h1 class="text-3xl font-bold text-center text-blue-600">
  Feedback Form App
</h1>
```

# 🧪 Example Feedback Form Fields

Full Name

Email Address

Rating (1–5 stars)

Message

Agreement Checkbox

# 🌐 Localhost Link

```
http://localhost:5173/
```

(Open automatically when you run the dev server)

# 📸 Screenshots

# 📝 Feedback Form UI

![FeedbackForm](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project04-CustomerFeedbackAndReportSystem/src/assets/Screenshot/Screenshot%202025-12-02%20153759.png)

# 📝Submitted Feedback

![SubmittedFeedback](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project04-CustomerFeedbackAndReportSystem/src/assets/Screenshot/Screenshot%202025-12-02%20154527.png)

# 🤍 Author

Jinal Jain
