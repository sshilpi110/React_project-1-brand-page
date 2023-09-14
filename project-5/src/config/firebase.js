// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from  "firebase/firestore" ;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChPE89K1NMudUbNJrgKkFBqxoesMOMKhQ",
  authDomain: "vite-contact-b2f73.firebaseapp.com",
  projectId: "vite-contact-b2f73",
  storageBucket: "vite-contact-b2f73.appspot.com",
  messagingSenderId: "316804305801",
  appId: "1:316804305801:web:1f4da31099f62815d5c758"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)