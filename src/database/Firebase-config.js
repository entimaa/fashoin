import  {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCrBxQeSR10baqnxt6ca_K1fT55qpbe50k",
  authDomain: "fashoin-e3c26.firebaseapp.com",
  projectId: "fashoin-e3c26",
  storageBucket: "fashoin-e3c26.appspot.com",
  messagingSenderId: "798065831910",
  appId: "1:798065831910:web:c76bb40a07415617297027"
};



const app = initializeApp(firebaseConfig);
export const storge = getStorage(app);
export const firebase=getFirestore(app);
export const auth = getAuth(app);