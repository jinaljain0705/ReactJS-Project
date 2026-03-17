import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTaYEaUu6UquDfOiibp8MwwYJAEautnOk",
  authDomain: "fir-authentication-syste-07.firebaseapp.com",
  projectId: "fir-authentication-syste-07",
  storageBucket: "fir-authentication-syste-07.firebasestorage.app",
  messagingSenderId: "714878382969",
  appId: "1:714878382969:web:af60712cf64ba5826575a8",
  measurementId: "G-743VS2184Y"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();