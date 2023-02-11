// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNAzHbv9aW9DwDt66eAvUMyLv5MRWLWOE",
  authDomain: "uber-next-clone-e7429.firebaseapp.com",
  projectId: "uber-next-clone-e7429",
  storageBucket: "uber-next-clone-e7429.appspot.com",
  messagingSenderId: "1039212850136",
  appId: "1:1039212850136:web:74af10356d662bf28260ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
