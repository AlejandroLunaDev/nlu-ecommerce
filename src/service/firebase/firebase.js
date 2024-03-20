

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getProduct } from "../api/MercadoLibre";

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
const db = getFirestore(app);
const productsRef = collection(db, "products");

export async function importProductsToFirebase(limit = "", searchQuery) {
  try {

  

    const products = await getProduct(limit, searchQuery);
    const categoryRef = collection(db, searchQuery);
    products.forEach(async (product) => {
      await addDoc(productsRef, product);
      await addDoc(categoryRef, { product, category: searchQuery });
    });

    console.log("Productos importados correctamente a Firebase.");
  } catch (error) {
    console.error("Error al importar productos a Firebase:", error);
  }
}

/* export async function getProductsFromFirebase() {
  try {
    const querySnapshot = await getDocs(productsRef);
    const products = querySnapshot.docs.map((doc) => doc.data());
    return products;
  } catch (error) {
    console.error("Error al obtener productos desde Firebase:", error);
    throw error;
  }
} */

export { db, productsRef };
