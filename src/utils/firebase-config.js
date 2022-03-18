import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKEF1W3Pem7RWqDQCXoESaK8nKULilEms",
  authDomain: "auth-reatc-firebase-first.firebaseapp.com",
  projectId: "auth-reatc-firebase-first",
  storageBucket: "auth-reatc-firebase-first.appspot.com",
  messagingSenderId: "442826606938",
  appId: "1:442826606938:web:442812b08593243ff14b63",
  measurementId: "G-0Z7DT6SJ2L",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
