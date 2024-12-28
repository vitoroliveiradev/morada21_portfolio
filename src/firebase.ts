import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1nNth0RL2x14fJWSFF5NVEzpcyCoW_SI",
  authDomain: "morada21-e0ef1.firebaseapp.com",
  projectId: "morada21-e0ef1",
  storageBucket: "morada21-e0ef1.firebasestorage.app",
  messagingSenderId: "863097772766",
  appId: "1:863097772766:web:c843bd3dd3e03df2df404f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);


