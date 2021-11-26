// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/database/dist/index.esm.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "rolex-shop.firebaseapp.com",
  databaseURL: "https://rolex-shop-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rolex-shop",
  storageBucket:  "rolex-shop.appspot.com",
  messagingSenderId:  "368639051908",
  appId:  "1:368639051908:web:678d24b010b3b8cbd2dad1",
  measurementId: " G-T5NVBRX56W"
  
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
