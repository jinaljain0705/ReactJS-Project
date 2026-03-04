# 📡 API Hunter – (React + Tailwind CSS)

API Hunter is a responsive React.js application that fetches and displays real-time product data from a public REST API. The project demonstrates API integration, search functionality, category filtering, routing, and LocalStorage usage with a clean UI built using Tailwind CSS.

# 🚀 Features

🔍 Search products by title 

📂 Filter products by category

📄 View detailed product page  

💾 Store selected product in LocalStorage  

⏳ Loading spinner while fetching data 

⚠️ Error handling for API failures  

📱 Fully responsive design

#  🌐 API Used

Fake Store API  

Endpoint: https://fakestoreapi.com/products 

# 🛠️ Technologies Used

- React.js (Vite)
  
- React Router DOM
  
- Tailwind CSS
  
- Axios

- JavaScript (ES6)
  
- HTML5
  
- LocalStorage

# 📂 Project Structure

```
src/
│
├── components/
│ ├── Search.jsx
│ ├── Card.jsx
│ ├── Loader.jsx
│ └── CategoryFilter.jsx
│
├── pages/
│ ├── Home.jsx
│ └── ProductDetails.jsx
│
├── App.jsx
├── main.jsx
└── index.css

```

# 🧭 Application Flow
                                                                   
| Route                  | Description                                       |
|------------------------|---------------------------------------------------|
| `/`                    | Home page (Product Listing)                       |
| `/product/:id`         | Product Details Page                              |

# 🔍 Search Logic

Search is implemented using `Array.filter()`.

- Filters products based on title
  
- Case-insensitive comparison
  
- Updates UI dynamically

### 📂 Category Filter Logic

- Extract unique categories using `Set`
  
- Filter products based on selected category
  
- "All" button resets filter

### 📄 Product Details Page

- Uses React Router `useNavigate`
  
- Selected product stored in LocalStorage
  
- Displays:
  
  - Image
    
  - Title
    
  - Price
    
  - Description
    
  - Category

### 💾 LocalStorage Usage

Key used:

```
selectedProduct
```

Selected product is stored before navigation and retrieved inside ProductDetails page.


# 🎨 UI Highlights

- Responsive grid layout
  
- Clean card design
  
- Hover effects
  
- Loading spinner
  
- Proper spacing and typography


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

# Screenshot

![]()

# 📌 Notes

- No backend required
  
- Data fetched from public API
  
- Project built using React Hooks only
  
- Suitable for learning API integration and routing

# 👨‍💻 Author

Jinal Jain

Full Stack Developer (React)

Project created for learning and academic purposes
