# 🏅 Sports Training Website – React + Bootstrap

A modern, responsive sports-themed website built using React, React-Bootstrap, and custom styling.
The website includes banners, blogs, promo sections, icons, footer, and multiple content blocks that replicate a professional sports theme layout.

# 📌 Features
# 🎨 UI Sections

✔ Hero Banner with Image + Promo Text

✔ Promo Icons (Choose Sport, Train by Professionals, Become a Pro)

✔ Blog Section with Cards

✔ Product / Promo Banner (Bike / BMX Section)

✔ Footer with Social Icons, Useful Links & Timings

# ⚛️ Tech Stack

React.js

React-Bootstrap

Bootstrap Icons / React Icons

Custom CSS

# 📁 Project Structure

```
/src
 ├── components
 │    ├── Navbar.jsx
 │    ├── HeroBanner.jsx
 │    ├── PromoIcons.jsx
 │    ├── BlogSection.jsx
 │    ├── PromoBanner.jsx
 │    └── Footer.jsx
 │
 ├── assets
 │    ├── images (bmx.jpg, icon1.png, blog images, etc.)
 │    └── icons
 │
 ├── App.jsx
 └── index.js
```

# 🚀 Installation & Setup

1️⃣ Clone Repository

```
git clone https://github.com/your-username/sports-website.git
cd sports-website
```

2️⃣ Install Dependencies

```
npm install
```

3️⃣ Run Project

```
npm run dev
```

# 🔹 Website will open at:

```
http://localhost:5173
```

# 🖼 Adding Images

Place images in:

```
src/assets/images
```

Then import them like this:

```
import bike from "../assets/images/bmx.jpg";
<img src={bike} alt="Promo" />
```

# 🧩 Components Overview

🟦 Hero Banner

Left: Large Image

Right: Promo icons + Heading + Buttons

🟩 Promo Icons

3 Equal Columns

Icons replaced using react-icons

Perfect for marketing features

🟧 Blog Section

Displays 3 Blog Cards

Includes title, date, badge, description

🟨 Promo Banner (BMX Section)

Full-width colored banner

Left image, right content with buttons

⚫ Footer

4 Columns: About, Useful Links, Latest Posts, Timing

Social icons included

Dark theme with clean layout

# 🎨 Custom Styling

You can modify all CSS inside:

```
src/App.css
src/components/YourComponent.css
```

Or use Bootstrap utility classes.

# 📦 Dependencies Used

```
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-bootstrap": "^2.x",
  "bootstrap": "^5.x",
  "react-icons": "^4.x"
}
```

# Screenshot

![Screen-01]{https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project05-WebsitePageUsingBootstrap/src/assets/Screenshot/Screenshot-01.png}

![Screen-02]{}

![Screen-03]{}

![Screen-04]{}

![Screen-05]{}

![Screen-06]{}

![Screen-07]{}

# 💬 Author

Jinal Jain
Frontend / Full-Stack Developer
