import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyAaKC6hL7uRGgH5yqyHHc0jdX-guaGjVaA",
  authDomain: "coursehub-b248a.firebaseapp.com",
  databaseURL: "https://coursehub-b248a-default-rtdb.firebaseio.com",
  projectId: "coursehub-b248a",
  storageBucket: "coursehub-b248a.appspot.com",
  messagingSenderId: "818704050905",
  appId: "1:818704050905:web:95d8db1b5cbb37150e2cc8",
  measurementId: "G-3PB8PQ3169"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

