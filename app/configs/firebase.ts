import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAk4y_8pO592YyvuGU1vhKKoZNiM3cZtDg",
  authDomain: "flame-show-28d51.firebaseapp.com",
  projectId: "flame-show-28d51",
  storageBucket: "flame-show-28d51.appspot.com",
  messagingSenderId: "533481090634",
  appId: "1:533481090634:web:6c4fe59d1edf9a805a40b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)
const auth = getAuth()

export { db, storage, auth };
