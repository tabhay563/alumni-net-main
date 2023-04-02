import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const clientCredentials = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAx3o4N0MegSboJdwoWFU19jb7eKtYOkKw",
  authDomain: "alumni-connect-f0c48.firebaseapp.com",
  projectId: "alumni-connect-f0c48",
  storageBucket: "alumni-connect-f0c48.appspot.com",
  messagingSenderId: "206477790060",
  appId: "1:206477790060:web:d33adc0c31093ee0db0149",
  measurementId: "G-K57ZH12FQ8",
};

function initFirebase() {
  if (typeof window !== undefined) {
    initializeApp(firebaseConfig);
    console.log("Firebase has been init successfully");
  }
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { initFirebase, auth, db };
