// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ykej5HFqT3_jkhkivvDR6lJ_wQiC_8M",
  authDomain: "trox-8ced3.firebaseapp.com",
  projectId: "trox-8ced3",
  storageBucket: "trox-8ced3.appspot.com",
  messagingSenderId: "144764896073",
  appId: "1:144764896073:web:fb211edeb7608098575098",
  measurementId: "G-9K1DB29ZZ0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
