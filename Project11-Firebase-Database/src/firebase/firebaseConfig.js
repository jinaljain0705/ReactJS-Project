import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAI2R627jpz0sWV2bfui6JzT0S7Xm0LOGw",
  authDomain: "inventory-tracking-syste-01.firebaseapp.com",
  projectId: "inventory-tracking-syste-01",
  storageBucket: "inventory-tracking-syste-01.firebasestorage.app",
  messagingSenderId: "759808229303",
  appId: "1:759808229303:web:2b8fcec7c07a4dcc683232",
  measurementId: "G-ZHDSQQ9L7V"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app)
export const storage = getStorage(app)

