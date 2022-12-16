// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7dXCj7JPqrnY_jgGjvROYpf5lvq_UKck",
  authDomain: "playstationsupportchat-4d3f7.firebaseapp.com",
  projectId: "playstationsupportchat-4d3f7",
  storageBucket: "playstationsupportchat-4d3f7.appspot.com",
  messagingSenderId: "797807632456",
  appId: "1:797807632456:web:510daa4780ab40f66a787d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
