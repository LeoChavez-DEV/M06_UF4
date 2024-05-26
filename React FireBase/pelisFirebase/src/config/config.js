// src/config/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAi8yrtfGj4CvqOrDT8CUWjwRYB8xO_xXU",
    authDomain: "pelis-firebase-m06.firebaseapp.com",
    projectId: "pelis-firebase-m06",
    storageBucket: "pelis-firebase-m06.appspot.com",
    messagingSenderId: "1051309145156",
    appId: "1:1051309145156:web:614bf75336a33ae128d011",
    measurementId: "G-QTJP9QW78H"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
