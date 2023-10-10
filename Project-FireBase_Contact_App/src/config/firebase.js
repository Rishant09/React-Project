// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcsEEgIViiJJ9u_HAJTzvgHvaj14yhKdo",
  authDomain: "vite-contact-1ba0f.firebaseapp.com",
  projectId: "vite-contact-1ba0f",
  storageBucket: "vite-contact-1ba0f.appspot.com",
  messagingSenderId: "399633510835",
  appId: "1:399633510835:web:1bfc7f7bb779b3be801bc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
