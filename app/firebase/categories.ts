import { db } from "@/app/configs/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

interface Category {
  category: string;
}

export const addCategory = async (data: Category) => {
  const categoriesRef = collection(db, "categories");
  await addDoc(categoriesRef, data);
};

export async function getCategories() {
  const collectionRef = collection(db, "categories");
  const docRef = await getDocs(collectionRef);

  const catList = docRef.docs.map((doc) => ({
    id: doc.id,
    category: doc.data().category,
  }));

  return catList;
}
export async function updateCategory(id: string, category: string) {
  try {
    const docRef = doc(db, "categories", id);
    await updateDoc(docRef, { category });
  } catch (err) {
    return err;
  }
}

export const deleteCategory = async (categoryId: string) => {
  const docRef = doc(db, "categories", categoryId);
  await deleteDoc(docRef);
};
