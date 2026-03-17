# 📦 Inventory Management System

A modern Inventory Management System built using React, Redux Toolkit, Firebase, and Tailwind CSS.
This project helps users manage products, track stock, and visualize inventory data in a clean dashboard.

# 🚀 Features

➕ Add Products

✏️ Update Product Details

❌ Delete Products

📋 View Product List

🔍 Search Products

📊 Inventory Dashboard (Stats + Charts)

🔥 Firebase Realtime Database Integration

⚡ Redux Toolkit for State Management

🎨 Tailwind CSS UI Design

# 🛠️ Tech Stack

Frontend: React.js

State Management: Redux Toolkit

Database: Firebase Realtime Database

Styling: Tailwind CSS

Build Tool: Vite

# 📂 Folder Structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── inventorySlice.js
│
├── components/
│   ├── ProductForm.jsx
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   └── SearchBar.jsx
│
├── firebase/
│   └── firebaseConfig.js
│
├── pages/
│   └── Dashboard.jsx
│
└── App.jsx
```

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/inventory-system.git
```

### 2️⃣ Navigate to project

```
cd inventory-system
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start development server

```
npm run dev
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

# 🔥 Firebase Setup

Go to Firebase Console

Create a new project

Enable Realtime Database

Copy Firebase config

Paste inside:

```
src/firebase/firebaseConfig.js
```

# 📊 Dashboard Metrics

Total Products

Total Stock

Low Stock Alerts

Inventory Value

# 🧠 Learning Concepts Used

Redux Toolkit (Slice, Store, Dispatch)

Async operations with Firebase

Component-based architecture

State handling with forms

Real-time data updates

# 👨‍💻 Author

Jinal Jain

Full Stack Developer
