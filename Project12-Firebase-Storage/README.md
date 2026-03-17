# 📁 Digital Document Manager

A modern web application to **upload, manage, preview, and delete digital documents** using **React.js, Redux Toolkit, and Firebase Realtime Database**.

---

## 🚀 Features

* 📤 Upload documents (Images, PDFs)
* 📄 View all uploaded files in a structured table
* 🖼 Preview images directly in UI
* ⬇️ Download documents
* 🗑 Delete files instantly
* 🔍 Search documents by name
* 📊 Dashboard with file statistics
* ⚡ Real-time UI updates using Redux

---

## 🛠 Tech Stack

* **Frontend:** React.js
* **State Management:** Redux Toolkit
* **Database:** Firebase Realtime Database
* **Styling:** Tailwind CSS
* **Build Tool:** Vite

---

## 📂 Project Structure

```
src/
├── app/
│   └── store.js
├── components/
│   ├── UploadFile.jsx
│   └── FileList.jsx
├── features/
│   └── fileSlice.js
├── firebase/
│   └── firebaseConfig.js
├── pages/
│   └── Dashboard.jsx
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/document-manager.git
cd document-manager
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Firebase

* Go to Firebase Console
* Create a new project
* Enable **Realtime Database**
* Copy your Firebase config

Update `firebaseConfig.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
};
```

---

### 4️⃣ Run the app

```bash
npm run dev
```

---

## 📸 Usage

1. Upload files using the upload section
2. View documents in the table
3. Search files using search bar
4. Download or delete files

---

## 🔥 Future Enhancements

* 📊 Upload progress bar
* 📂 File categorization
* ✏️ Rename/Edit metadata
* 🔐 User authentication (Firebase Auth)
* ☁️ Firebase Storage integration (instead of base64)
* 🎨 Advanced UI (Admin Dashboard)

---

## 🐛 Common Issues

* ❌ Firebase config not set properly
* ❌ Incorrect import paths
* ❌ Missing `db` export in firebaseConfig

---

## 📌 Author

Developed by **You** as part of a Full Stack Development project.

---

## ⭐ Conclusion

This project demonstrates:

* Real-world CRUD operations
* Redux async handling (Thunk)
* Firebase integration
* Clean UI with Tailwind CSS

---

