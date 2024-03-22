
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB2X-Fzo40Stx9ERpd21vBzfaToUglx9Dc",
  authDomain: "ecommerce-abbde.firebaseapp.com",
  projectId: "ecommerce-abbde",
  storageBucket: "ecommerce-abbde.appspot.com",
  messagingSenderId: "12443428682",
  appId: "1:12443428682:web:57114881d11d58e06343b3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


