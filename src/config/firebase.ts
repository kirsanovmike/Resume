
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW9HjWsD88Eaf63MUhes7J2J61AeeDeso",
  authDomain: "cv-db-33e7b.firebaseapp.com",
  projectId: "cv-db-33e7b",
  storageBucket: "cv-db-33e7b.appspot.com",
  messagingSenderId: "245967322457",
  appId: "1:245967322457:web:4071602500d7d4145aa048",
  measurementId: "G-E7Y6TV13GN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
  db,
}