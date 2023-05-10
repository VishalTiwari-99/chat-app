import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqfaJe6uqVtK-4AIVh-OR-eogk34IV6AU",
  authDomain: "chat-af22f.firebaseapp.com",
  projectId: "chat-af22f",
  storageBucket: "chat-af22f.appspot.com",
  messagingSenderId: "477041135530",
  appId: "1:477041135530:web:c1fc3459df4009afdee5d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
