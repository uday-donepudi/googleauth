import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDEONtYYJ_QycOFzIQaUeb6iWCL1z-Kijg",
    authDomain: "auth-2e014.firebaseapp.com",
    projectId: "auth-2e014",
    storageBucket: "auth-2e014.firebasestorage.app",
    messagingSenderId: "76385256234",
    appId: "1:76385256234:web:b3a5f3ffcbefb98f879453",
    measurementId: "G-RZ2PG7PES5"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();