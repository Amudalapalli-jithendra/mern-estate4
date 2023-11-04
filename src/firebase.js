// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-40372.firebaseapp.com",
  projectId: "mern-estate-40372",
  storageBucket: "mern-estate-40372.appspot.com",
  messagingSenderId: "281616578424",
  appId: "1:281616578424:web:89d645eeaf23af9569ba8d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);