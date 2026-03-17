import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBMKypQuPK3B6WVh26agDX0vt2DArvLkhk",
  authDomain: "digital-document-manager-07.firebaseapp.com",
  projectId: "digital-document-manager-07",
  storageBucket: "digital-document-manager-07.firebasestorage.app",
  messagingSenderId: "954899675875",
  appId: "1:954899675875:web:7ac8ba632094405b7123d6",
  measurementId: "G-WM675HWBCH",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
const _analytics = getAnalytics(app);
