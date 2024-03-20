// Import the functions you need from the SDKs you need
import  {initializeApp} from 'firebase/app';
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth';
import {getFirestore} from'firebase/firestore';
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();

export default app; 