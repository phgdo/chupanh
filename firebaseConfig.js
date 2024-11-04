// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjHI6rpeZJSufI-8PqzB-KkrowEVhMPkk",
  authDomain: "chupanh-d2482.firebaseapp.com",
  projectId: "chupanh-d2482",
  storageBucket: "chupanh-d2482.firebasestorage.app",
  messagingSenderId: "497030627716",
  appId: "1:497030627716:web:6e1d1debc28545f2951dd1",
  measurementId: "G-57RDHRLCM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
