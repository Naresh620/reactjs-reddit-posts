// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtBK0GGI2OsoCH4tsLI0xC1c-qgps0xq4",
  authDomain: "reddit-reactjs-feed-c6c72.firebaseapp.com",
  projectId: "reddit-reactjs-feed-c6c72",
  storageBucket: "reddit-reactjs-feed-c6c72.firebasestorage.app",
  messagingSenderId: "952788838724",
  appId: "1:952788838724:web:7805af233b27210e084f11",
  measurementId: "G-GQNS8JWF39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);