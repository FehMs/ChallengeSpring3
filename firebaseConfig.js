// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD60WO_0ciVBr3rwrbX5YY0abCHG_v2fw0",
  authDomain: "projetochallenge-d0818.firebaseapp.com",
  projectId: "projetochallenge-d0818",
  storageBucket: "projetochallenge-d0818.appspot.com",
  messagingSenderId: "531041634141",
  appId: "1:531041634141:web:56346d12ccec95fae88ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }