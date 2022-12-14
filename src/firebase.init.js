// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCoL2Mon4BXec8qcZgxtb-Dqx8JkPxsUXE",
    // authDomain: "mosque-management.firebaseapp.com",
    // projectId: "mosque-management",
    // storageBucket: "mosque-management.appspot.com",
    // messagingSenderId: "1023031549268",
    // appId: "1:1023031549268:web:3ff34525694c16741fbcc1"

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId



};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)
export default auth;