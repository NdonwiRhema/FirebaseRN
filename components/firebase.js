// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbZDHGImI4L7O9l-gKS93jQMk9Cvulai0",
  authDomain: "fir-rn-a3ab2.firebaseapp.com",
  projectId: "fir-rn-a3ab2",
  storageBucket: "fir-rn-a3ab2.appspot.com",
  messagingSenderId: "32919010946",
  appId: "1:32919010946:web:655b760861d9d1b588be9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getFirestore(app);

export default db;