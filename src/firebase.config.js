import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdlcAP1PFrJ9qzAxoOXQVYl6eAmi8WZ58",
  authDomain: "pet-finder-app-ee4f7.firebaseapp.com",
  projectId: "pet-finder-app-ee4f7",
  storageBucket: "pet-finder-app-ee4f7.appspot.com",
  messagingSenderId: "357910295490",
  appId: "1:357910295490:web:41a8dd66783a085dc0dc5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)