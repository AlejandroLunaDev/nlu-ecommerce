

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getProduct } from "../api/MercadoLibre";

const firebaseConfig = {
  apiKey: "AIzaSyDTaBbh7nrSrQ9V_54N27Oa65PlZTYTO7w",
  authDomain: "nolouso-8356b.firebaseapp.com",
  projectId: "nolouso-8356b",
  storageBucket: "nolouso-8356b.appspot.com",
  messagingSenderId: "866164698697",
  appId: "1:866164698697:web:25ce851d9f117644ac9998",
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
    const products = querySnapshot.docs.map(doc => doc.data());
    return products;
  } catch (error) {
    console.error('Error al obtener productos desde Firebase:', error);
    throw error;
  }
} */

export { db, productsRef };
