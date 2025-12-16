# 📦 LocalBox Miner – React + LocalStorage

LocalBox Miner is a React-based offline data management application designed to demonstrate core React concepts such as state management, localStorage integration, CRUD operations, component communication, and event-driven UI updates.

This project works completely offline and stores all data inside the browser using localStorage.

# 📌 Features

Add / Edit Record Form

Records Table with Edit & Delete actions

Dashboard Stats (Total Records, Last Added Record)

Search / Filter Records

Clear All Records option

Dark Mode support

Validation & Conditional UI Messages

# ⚛️ Tech Stack

React.js (Functional Components + Hooks)

Tailwind CSS (Vite plugin method)

JavaScript (ES6)

Browser localStorage

# 📁 Project Structure

```
/src
 ├── components
 │    ├── RecordForm.jsx
 │    ├── RecordList.jsx
 │    ├── RecordRow.jsx
 │    ├── DashboardStats.jsx
 │    ├── SearchBar.jsx
 │    └── DarkModeToggle.jsx
 │
 ├── App.jsx
 └── main.jsx
```

# 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/localbox-miner.git
cd localbox-miner
```

### 2️⃣ Install Dependencies

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

Import Tailwind in CSS (`src/index.css`)

```
@import "tailwindcss";
```

Import CSS in Entry File (`main.jsx`)

```
import './index.css';
```

### 4️⃣ Run the Project

```
npm run dev
```

Open your browser at `http://localhost:5173`

# ScreenShot

### 1. LocalBoxMiner

   ![LocalBoxMiner](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project06-Localbox-Miner/src/assets/ScreenShot/LocalBoxMiner.png)

### 2. AddRecord

   ![AddRecord](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project06-Localbox-Miner/src/assets/ScreenShot/AddRecord.png)

### 3. UpdateRecord

   ![UpdateRecord](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project06-Localbox-Miner/src/assets/ScreenShot/UpdateRecord.png)

### 4. DeleteRecord

   ![DeleteRecord](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project06-Localbox-Miner/src/assets/ScreenShot/DeleteRecord.png)

# 👤 Author

### Name: Jinal Jain

### Role: Full-stack / React Developer
