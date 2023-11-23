import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.apiKey, // Colocar no .env
  authDomain: "uploads-615a5.firebaseapp.com",
  projectId: "uploads-615a5",
  storageBucket: "uploads-615a5.appspot.com",
  messagingSenderId: "510608348977",
  appId: "1:510608348977:web:840f94d03a27ef9cddc210",
  measurementId: "G-19YR3NTFQD",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
