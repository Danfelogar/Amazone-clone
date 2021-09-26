// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3kEzMyvRjogcFSIwFyLUyu5AbB-yfCik",
  authDomain: "clone-496d8.firebaseapp.com",
  projectId: "clone-496d8",
  storageBucket: "clone-496d8.appspot.com",
  messagingSenderId: "432761139571",
  appId: "1:432761139571:web:a5e4364442b9797978d506",
  measurementId: "G-9V9K3TZW1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);