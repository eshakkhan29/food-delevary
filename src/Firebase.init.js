import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4Aa4EnOaOC2d1BsDDwezpmTnnM2oSoGQ",
  authDomain: "food-delivery-6f163.firebaseapp.com",
  projectId: "food-delivery-6f163",
  storageBucket: "food-delivery-6f163.appspot.com",
  messagingSenderId: "429272056433",
  appId: "1:429272056433:web:982f0c91ada0885f0491d0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;