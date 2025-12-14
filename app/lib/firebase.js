// app/lib/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGBFLNRWA9KXddrVLpr2pSgE5hZpXNy_8",
  authDomain: "offerkhoj-b7164.firebaseapp.com",
  projectId: "offerkhoj-b7164",
  storageBucket: "offerkhoj-b7164.firebasestorage.app",
  messagingSenderId: "549729427968",
  appId: "1:549729427968:web:a3a52abb7922e0731aaee5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
