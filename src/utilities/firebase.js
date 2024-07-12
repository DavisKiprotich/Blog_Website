// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "murerwa-writes.firebaseapp.com",
  projectId: "murerwa-writes",
  storageBucket: "murerwa-writes.appspot.com",
  messagingSenderId: "675694025736",
  appId: "1:675694025736:web:cd66fd1d8cfb16d45d05bd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);