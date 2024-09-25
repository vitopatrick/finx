import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCsekT9gVzbeCqTO8X1u2JtOcpL3sgeRI",
  authDomain: "neomarketfx-b4063.firebaseapp.com",
  projectId: "neomarketfx-b4063",
  storageBucket: "neomarketfx-b4063.appspot.com",
  messagingSenderId: "810434926415",
  appId: "1:810434926415:web:090e3cd8336468fdc0d73a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
