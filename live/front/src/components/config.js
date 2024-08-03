/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9aVWvPZ_ELVzbXZBe1U5Z0oLj4tAImNU",
  authDomain: "car-pooling-761a7.firebaseapp.com",
  databaseURL: "https://car-pooling-761a7-default-rtdb.firebaseio.com",
  projectId: "car-pooling-761a7",
  storageBucket: "car-pooling-761a7.appspot.com",
  messagingSenderId: "25058833052",
  appId: "1:25058833052:web:1b89b30f2d16fcbec83359",
  measurementId: "G-SCNRW6KYP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const imageDb = getStorage(app);