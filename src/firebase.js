import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import application from './firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvxM_QwJah-MjFzqUQd_72CECgdOuGE5E",
  authDomain: "todotasks-b53b5.firebaseapp.com",
  projectId: "todotasks-b53b5",
  storageBucket: "todotasks-b53b5.appspot.com",
  messagingSenderId: "1012055803331",
  appId: "1:1012055803331:web:9d73f4e3b7aa22e2982976",
  measurementId: "G-N7WWV8KJD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app; 