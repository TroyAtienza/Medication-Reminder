// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGJMVy14Zg8Tally8ScSL2Hd3yrlx7ECs",
  authDomain: "medication-reminder-app-249ce.firebaseapp.com",
  projectId: "medication-reminder-app-249ce",
  storageBucket: "medication-reminder-app-249ce.appspot.com",
  messagingSenderId: "666126914208",
  appId: "1:666126914208:web:a0a13091103f638141afc5",
  measurementId: "G-PWG1BJP0S3"
};

// Initialize Firebase
if (!firebase.app.length) {
    firebase.initializeApp(firebaseConfig);
}

export { auth };