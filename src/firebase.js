// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/database';
import { getDatabase } from "firebase/database";
// import { } from "firebase/database"
// import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
    apiKey: "AIzaSyAuuSAAOn0aXbDa-1-pc9xigsbtzSWOA4U",
    authDomain: "nornirx.firebaseapp.com",
    projectId: "nornirx",
    storageBucket: "nornirx.appspot.com",
    messagingSenderId: "271279686347",
    appId: "1:271279686347:web:0b6fe00455b90e88b4914e",
    measurementId: "G-TVDTNJG27M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);