
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys

const firebaseConfig = {
  apiKey: "AIzaSyAHSLGKNC7MrndvjQXPHkgohpYyBVtngt8",
  authDomain: "videocalling-c595f.firebaseapp.com",
  projectId: "videocalling-c595f",
  storageBucket: "videocalling-c595f.appspot.com",
  messagingSenderId: "58062759655",
  appId: "1:58062759655:web:615aa86f5b8643e627e442"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);