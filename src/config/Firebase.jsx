import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  updateDoc,

} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpoMNaEjnNOF_grm6Q0QA-32BuVIdFNok",
  authDomain: "olx-sumair.firebaseapp.com",
  projectId: "olx-sumair",
  storageBucket: "olx-sumair.appspot.com",
  messagingSenderId: "964510239079",
  appId: "1:964510239079:web:b873b58f798d61dd5f47c2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  doc,
  getDoc,
  collection,
  onSnapshot,
  addDoc,
  signOut,
  onAuthStateChanged,
};
