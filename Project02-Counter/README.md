# 🧮 Simple Counter App

A lightweight and user-friendly counter application built using React.js, featuring increment, decrement, and reset functionality. This project demonstrates the use of useState, component structure, props, and clean UI handling in React.

# 🚀 Features

➕ Increment Count

➖ Decrement Count

🔁 Reset Count

🔍 Dynamic message based on count value

🎨 Simple & clean UI

⚛️ Built using React Functional Components + Hooks

# 📂 Project Structure
```
src/
 ├── App.jsx
 ├── App.css
 └── assets/
      └── components/
           └── counter.jsx
```

# 📦 Technologies Used

React.js

Vite (Fast Development Server)

JavaScript (ES6+)

CSS

# 📘 How It Works
  # 🧠 useState Hook

The counter value is managed using:

const [count, setCount] = useState(0);

# 📊 Dynamic Message

Depending on count:

If count > 0 → "Count is increasing"

If count < 0 → "Count is negative"

If count === 0 → "Count is back to zero"

# 🎛 Buttons

Increment → setCount(count + 1)

Decrement → setCount(count - 1)

Reset → setCount(0)

# ▶️ How to Run the Project
  # 1️⃣ Install Dependencies
  ```
npm install
```
# 2️⃣ Run Development Server
```
npm run dev
```

# 3️⃣ Open in Browser

Vite will show a local URL like:
```
http://localhost:5173/
```

Open it to use your counter app.

# 📌 Usage Example
```
import Counter from "./assets/components/counter";

function App() {
  return <Counter />;
}
```

# ⭐ Future Improvements (optional)

Add dark mode

Add auto-increment using useEffect

Add animations

Add custom step increment

# ScreenShot

![Counter]()

# 💙 Created By

Jinal Jain

All code is written by me for this project.
