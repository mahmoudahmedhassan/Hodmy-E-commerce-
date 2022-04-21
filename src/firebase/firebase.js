// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}  from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyD0U7Te9oJCBr9BNFrfikky0y-mwInoQ6E",
    authDomain: "e-commerce-36c2c.firebaseapp.com",
    projectId: "e-commerce-36c2c",
    storageBucket: "e-commerce-36c2c.appspot.com",
    messagingSenderId: "28635911006",
    appId: "1:28635911006:web:d94e6cd1db02d697cd75cf",
    measurementId: "G-WDQEGBPKH7"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app);
