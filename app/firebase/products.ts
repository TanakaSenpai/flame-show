import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
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
  createdAt?: string;
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
  const q = query(collectionRef, orderBy("createdAt", "desc"))
  const docRef = await getDocs(q);
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

const deleteProduct = async (id: string) => {
  const docRef = doc(db, "posts", id);
  await deleteDoc(docRef);
}

export { checkCodeExists, addPost, getPosts, updateProduct, deleteProduct };
