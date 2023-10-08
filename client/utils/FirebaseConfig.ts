// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi-JoI_ff0nK6l0E8oVIYdca3lUDKdDzs",
  authDomain: "vartalaap-2d34a.firebaseapp.com",
  projectId: "vartalaap-2d34a",
  storageBucket: "vartalaap-2d34a.appspot.com",
  messagingSenderId: "1026370602336",
  appId: "1:1026370602336:web:a3ca35454ed5f0276f0a05",
  measurementId: "G-DCT68Y7ZJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);