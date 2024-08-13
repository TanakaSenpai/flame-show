import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../configs/firebase";

export interface Post {
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

const addPost = async (data: Post) => {
    const collectionRef = collection(db, "posts");
    await addDoc(collectionRef, data)
}

const getPosts = async () => {
  const collectionRef = collection(db, "posts");
  const docRef = await getDocs(collectionRef);
  const productList = docRef.docs.map(doc => {
    return {
      id: doc.id,
     ...doc.data(),
    } as Post;
  })

  return productList;
}

export { checkCodeExists, addPost, getPosts };
