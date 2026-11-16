import { db } from "../firebase/config";

import {
  collection,
  getDocs,
  getDoc,
  doc,
  addDoc
} from "firebase/firestore";

const products = collection(db, "products");

export const getProducts = async () => {
  const snapshot = await getDocs(products);

  return snapshot.docs.map((document) => ({
    ...document.data(),
    id: document.id
  }));
};

export const getProductById = async (id) => {
  const productRef = doc(products, id);
  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    ...snapshot.data(),
    id: snapshot.id
  };
};

export const createProduct = async (product) => {
  const newProduct = await addDoc(products, product);

  return newProduct.id;
};