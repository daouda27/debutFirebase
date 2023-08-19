// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjgA37vrtCRRLyXM-cSESSJeapRqL_sj0",
  authDomain: "debutfirebase-61fea.firebaseapp.com",
  projectId: "debutfirebase-61fea",
  storageBucket: "debutfirebase-61fea.appspot.com",
  messagingSenderId: "24207367161",
  appId: "1:24207367161:web:2545179f2bf12b4166bb28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
