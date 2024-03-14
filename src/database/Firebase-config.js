// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAlc2yIkMu5ws_pgiZbvetC4NzBZv23Nps",
  authDomain: "designfashoin.firebaseapp.com",
  projectId: "designfashoin",
  storageBucket: "designfashoin.appspot.com",
  messagingSenderId: "967210178253",
  appId: "1:967210178253:web:c52459540e6ef9dc197b84",
  measurementId: "G-JEX4QNJ5CT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);