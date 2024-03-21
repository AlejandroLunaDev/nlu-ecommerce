
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCFk84alRgNdrXEleiGIUBHqFEaxcslH3g",
  authDomain: "nlu-ecommerce.firebaseapp.com",
  projectId: "nlu-ecommerce",
  storageBucket: "nlu-ecommerce.appspot.com",
  messagingSenderId: "111239922008",
  appId: "1:111239922008:web:0b27edcef74cd11cdf652d",
  measurementId: "G-4CL6DKS2JZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


