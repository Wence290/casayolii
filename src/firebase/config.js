
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjdEZFFrTKhM7n2bPUqDLbqnKoMyE2n-8",
  authDomain: "casa-yoli.firebaseapp.com",
  projectId: "casa-yoli",
  storageBucket: "casa-yoli.firebasestorage.app",
  messagingSenderId: "536790708584",
  appId: "1:536790708584:web:59a61b4e9550d2b92b66dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const adminUid = "Fud0cBn7BgMkwzRachNDNe7Ekmg1";