// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaFxE9pBbEGhw07d305USxOO0155636wg",
  authDomain: "dheeraj-bhaiya.firebaseapp.com",
  projectId: "dheeraj-bhaiya",
  storageBucket: "dheeraj-bhaiya.appspot.com",
  messagingSenderId: "605019757308",
  appId: "1:605019757308:web:8204aa76384ce3a438d579"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
