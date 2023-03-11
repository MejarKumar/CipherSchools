import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcgdRsP_Ldy-knY0TnzZDrSvOfqZJpUhw",
  authDomain: "cipherschools-373f7.firebaseapp.com",
  projectId: "cipherschools-373f7",
  storageBucket: "cipherschools-373f7.appspot.com",
  messagingSenderId: "851347563763",
  appId: "1:851347563763:web:cee9cdca49dc5252960386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
