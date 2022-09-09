import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGJMVy14Zg8Tally8ScSL2Hd3yrlx7ECs",
  authDomain: "medication-reminder-app-249ce.firebaseapp.com",
  projectId: "medication-reminder-app-249ce",
  storageBucket: "medication-reminder-app-249ce.appspot.com",
  messagingSenderId: "666126914208",
  appId: "1:666126914208:web:a0a13091103f638141afc5",
  measurementId: "G-PWG1BJP0S3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth } 