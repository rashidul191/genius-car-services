// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from '.firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFiN8SEIH_GtcE3Sg8zt9F_sU34DpwTfI",
  authDomain: "genius-car-services-2733a.firebaseapp.com",
  projectId: "genius-car-services-2733a",
  storageBucket: "genius-car-services-2733a.appspot.com",
  messagingSenderId: "782478085780",
  appId: "1:782478085780:web:1ce7a21ec4599d61336e81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth