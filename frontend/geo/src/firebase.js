import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFyoIF6zMwL-h_mPt7yjmKpglf9t3Wg5Q",
  authDomain: "geoflux-3f828.firebaseapp.com",
  projectId: "geoflux-3f828",
  storageBucket: "geoflux-3f828.firebasestorage.app",
  messagingSenderId: "801882568696",
  appId: "1:801882568696:web:6c41b957a978a42f04480d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
