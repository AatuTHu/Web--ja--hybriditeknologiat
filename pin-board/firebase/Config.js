// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc, serverTimestamp,querySnapshot, onSnapshot, query, orderBy, doc, deleteDoc, updateDoc, where, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    
};
  

// Initialize Firebase
initializeApp(firebaseConfig);

const firestore = getFirestore()
const MESSAGES = 'messages'

export {
    firestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
    doc,
    getDocs,
    deleteDoc,
    updateDoc,
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    where,
    updateProfile,
    MESSAGES
};