// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6DI2mhdT_54T798rYaIdLJkhoVe0D2l8",
    authDomain: "portfolio-bf41f.firebaseapp.com",
    projectId: "portfolio-bf41f",
    storageBucket: "portfolio-bf41f.appspot.com",
    messagingSenderId: "403868358617",
    appId: "1:403868358617:web:0f0180d5aa2d8473ca6bc8",
    measurementId: "G-9CE9DFC1G8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);