import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBwbNbfAxIGrOtXVmKWPUzUHjnqrmWnluk",
  authDomain: "steams-4ddf7.firebaseapp.com",
  projectId: "steams-4ddf7",
  storageBucket: "steams-4ddf7.appspot.com",
  messagingSenderId: "311640305436",
  appId: "1:311640305436:web:7b0b42227d67ca879814d9",
  measurementId: "G-8MNVXB9HX1",
};
const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);
export default analytics;
