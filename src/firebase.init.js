// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw19MYbMFFXebnSSJ6S57WH-SgUH5jdSk",
    authDomain: "rashedulhaqueador-b50a7.firebaseapp.com",
    projectId: "rashedulhaqueador-b50a7",
    storageBucket: "rashedulhaqueador-b50a7.appspot.com",
    messagingSenderId: "264885628320",
    appId: "1:264885628320:web:0e82a5dcb5997c2552c8c5",
    measurementId: "G-SGMCYNHK97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);