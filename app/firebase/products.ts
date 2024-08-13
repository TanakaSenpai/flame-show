import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../configs/firebase";

export interface Product {
  id?: string;
  name: string;
  imgUrls: string[];
  price: number;
  colors: string;
  category: string;
  productCode: string;
  stock: string;
}


const checkCodeExists = async (
  collectionName: string,
  fieldName: string,
  fieldValue: string
) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef, where(fieldName, "==", fieldValue));
  const querySnapshot = await getDocs(q);
  return querySnapshot.size > 0;
};

const addPost = async (data: Product) => {
  const collectionRef = collection(db, "posts");
  await addDoc(collectionRef, data);
};

const getPosts = async () => {
  const collectionRef = collection(db, "posts");
  const docRef = await getDocs(collectionRef);
  const productList = docRef.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    } as Product;
  })

  return productList;
}

const updateProduct = async (
  id: string,
  { name, category, price, colors, productCode, stock }: Product
) => {
  const docRef = doc(db, "posts", id!);
  await updateDoc(docRef, {
    name,
    category,
    price,
    colors,
    productCode,
    stock,
  });
};

export { checkCodeExists, addPost, getPosts, updateProduct };
