# 🔐 Firebase Authentication System

A modern and secure **Firebase Authentication System** built using **React.js** and **Firebase Authentication**. This application allows users to register, log in, and access protected routes with real-time authentication state handling.

---

## 🚀 Features

* ✅ User Registration (Email & Password)
* ✅ User Login (Email & Password)
* ✅ Google Authentication (Social Login)
* ✅ Protected Routes (Dashboard access only for logged-in users)
* ✅ Logout Functionality
* ✅ Real-Time Authentication State Monitoring
* ✅ Clean and Responsive UI (Tailwind CSS)

---

## 📚 Use Case

This project can be used as a base authentication system for:

* SaaS platforms
* Admin dashboards
* Web applications requiring secure login
* Portfolio projects

---

## 🛠 Tech Stack

* **Frontend:** React.js
* **Authentication:** Firebase Authentication
* **Routing:** React Router DOM
* **State Management:** React Context API
* **Styling:** Tailwind CSS
* **Deployment:** Vercel

---

## 📂 Project Structure

```
src/
 ┣ components/
 ┃ ┗ PrivateRoute.jsx
 ┣ context/
 ┃ ┗ AuthContext.jsx
 ┣ pages/
 ┃ ┣ Login.jsx
 ┃ ┣ Register.jsx
 ┃ ┗ Dashboard.jsx
 ┣ firebase.js
 ┣ App.jsx
 ┗ main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```
git clone https://github.com/your-username/firebase-auth-system.git
cd firebase-auth-system
```

---

### 2️⃣ Install Dependencies

```
npm install
```

---

### 3️⃣ Setup Firebase

1. Go to Firebase Console
2. Create a new project
3. Enable Authentication:

   * Email/Password
   * Google Sign-In
4. Copy your Firebase config

---

### 4️⃣ Configure Firebase

Update your `firebase.js` file:

```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID"
};
```

---

### 5️⃣ Run the App

```
npm run dev
```

---

## 🔐 Authentication Flow

1. User registers or logs in
2. Firebase authenticates user
3. Auth state is stored using Context API
4. Protected routes check authentication
5. Unauthorized users are redirected to login

---

## 📸 Screens Included

* Login Page

  ![login](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project13-Firebase-Auth/src/assets/screenshot/login.png)
  
* Register Page

  ![register](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project13-Firebase-Auth/src/assets/screenshot/register.png)
  
* Dashboard (Protected)

  ![user](https://github.com/jinaljain0705/ReactJS-Project/blob/main/Project13-Firebase-Auth/src/assets/screenshot/user-register.png)

---

## 🔄 Future Enhancements

* 🔹 Password Reset via Email
* 🔹 Email Verification
* 🔹 User Profile Update (Name, Avatar)
* 🔹 Firebase Firestore Integration
* 🔹 Redux Toolkit Integration
* 🔹 Role-Based Authentication (Admin/User)

---

## 🌐 Deployment

You can deploy this project using:

* Vercel
* 
* Firebase Hosting

---

## 🙌 Author

**Jinal Jain**

Full Stack Developer (Fresher)

---

## ⭐ Support

If you like this project:

* Give it a ⭐ on GitHub
* Share with others
* Use it in your projects

---

## 📌 Note

This project is for learning and demonstration purposes. You can extend it into a full production-ready authentication system.

---
