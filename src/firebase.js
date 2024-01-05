import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// this will be hidden in an envirnoment variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdoYJhbcGJgq581hazH79E-UiSHaabVa8",
  authDomain: "grosspoint-dc427.firebaseapp.com",
  projectId: "grosspoint-dc427",
  storageBucket: "grosspoint-dc427.appspot.com",
  messagingSenderId: "2416104695",
  appId: "1:2416104695:web:1e916c50a3d86963a0eff2",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
