
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAdMZAYYB4L4-UUQvgJpgkCcP3yDKzKT5c",
  authDomain: "mychatapplication-deafc.firebaseapp.com",
  projectId: "mychatapplication-deafc",
  storageBucket: "mychatapplication-deafc.appspot.com",
  messagingSenderId: "1082816565307",
  appId: "1:1082816565307:web:80e0c4af295418ffa40c1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);