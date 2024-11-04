// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjBy7ie2InYyoddL0npm62HAjPP6VUbpc",
  authDomain: "chupanh-7d028.firebaseapp.com",
  projectId: "chupanh-7d028",
  storageBucket: "chupanh-7d028.firebasestorage.app",
  messagingSenderId: "934157057388",
  appId: "1:934157057388:web:03bd7b93967a47e7f50749",
  measurementId: "G-WQ9KR0TZQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
