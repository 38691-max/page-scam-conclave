import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyCVVRJmgdC6GwrwywL-Oh9mOS77KbcmyZA",
  authDomain: "conclave-76014.firebaseapp.com",
  projectId: "conclave-76014",
  storageBucket: "conclave-76014.firebasestorage.app",
  messagingSenderId: "557075908737",
  appId: "1:557075908737:web:819c580e3fe3c8ea35a580",
  measurementId: "G-DM41Q42DX4"
});

export const db = getFirestore(app, "emails");