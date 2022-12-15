// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfo4m3N0nZX52DaaVvEnlzi5KJ87DHhA4",
  authDomain: "playstationsupportchat.firebaseapp.com",
  projectId: "playstationsupportchat",
  storageBucket: "playstationsupportchat.appspot.com",
  messagingSenderId: "418755429198",
  appId: "1:418755429198:web:0b4503300dbf1fe653d41f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
