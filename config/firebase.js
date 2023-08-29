// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRfKQ_IuXgyUnXm_2Bp66_FE5zTaS01Ic",
  authDomain: "react-native-login-cd824.firebaseapp.com",
  projectId: "react-native-login-cd824",
  storageBucket: "react-native-login-cd824.appspot.com",
  messagingSenderId: "330246932010",
  appId: "1:330246932010:web:dba4a3e84d8ffd54482553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);