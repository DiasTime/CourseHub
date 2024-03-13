// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaKC6hL7uRGgH5yqyHHc0jdX-guaGjVaA",
  authDomain: "coursehub-b248a.firebaseapp.com",
  projectId: "coursehub-b248a",
  storageBucket: "coursehub-b248a.appspot.com",
  messagingSenderId: "818704050905",
  appId: "1:818704050905:web:95d8db1b5cbb37150e2cc8",
  measurementId: "G-3PB8PQ3169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// TODO: Add additional Firebase products by importing their modules and initializing them with the app instance
// For example, to add Firebase Authentication:
// import { getAuth } from "firebase/auth";
// const auth = getAuth(app);
