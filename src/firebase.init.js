// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaTe4xZQYB-Q-XU3QCYVGfuqCohn2qv7s",
    authDomain: "sports-zone-8991a.firebaseapp.com",
    projectId: "sports-zone-8991a",
    storageBucket: "sports-zone-8991a.appspot.com",
    messagingSenderId: "775022856410",
    appId: "1:775022856410:web:4d9ce188e3e4aa59fb3de3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
