// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAailrMYr4EHm5cwc2q7LaU3_cHR75VfsY",
  authDomain: "study-groups-7ed6c.firebaseapp.com",
  projectId: "study-groups-7ed6c",
  storageBucket: "study-groups-7ed6c.appspot.com",
  messagingSenderId: "220111475250",
  appId: "1:220111475250:web:20a84e62da03ca4777622b",
  measurementId: "G-34ED0S0NNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 
const auth = getAuth();
const db = getFirestore();
export { auth, db };