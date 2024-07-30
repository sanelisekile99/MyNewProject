import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9ooRRlJ2wr0ZY_IcLYGiNcM4SihMFGMg",
  authDomain: "testing101-190d0.firebaseapp.com",
  projectId: "testing101-190d0",
  storageBucket: "testing101-190d0.appspot.com",
  messagingSenderId: "223884924758",
  appId: "1:223884924758:web:5b917568e23a3b2f3728f7",
  measurementId: "G-K7WCLVM4NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth, db, analytics };
