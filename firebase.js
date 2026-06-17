// firebase.js — Firebase configuration for Ankit's Portfolio
// Include this file in both index.html and admin.html

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGXUCwIWavNtIAy69CzpuArdW6BouMLSE",
  authDomain: "my-portfolio-eea87.firebaseapp.com",
  projectId: "my-portfolio-eea87",
  storageBucket: "my-portfolio-eea87.firebasestorage.app",
  messagingSenderId: "257049023490",
  appId: "1:257049023490:web:ff4af2073ab154f02f031b",
  measurementId: "G-ZDCC6DJ9RW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
