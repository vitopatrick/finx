import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXZw7kuxEbzOECF8oFCv5TZ_zXo3mkFO0",
  authDomain: "Neomarketdfx-c9919.firebaseapp.com",
  projectId: "Neomarketdfx-c9919",
  storageBucket: "Neomarketdfx-c9919.appspot.com",
  messagingSenderId: "718451202525",
  appId: "1:718451202525:web:4171a7840a23b64d74fe34",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
