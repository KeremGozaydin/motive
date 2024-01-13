import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { writable } from "svelte/store";
import type { User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDT-ipdi8HC9HbJoB3FEkB49KaSBrwprFE",
  authDomain: "united-hacks.firebaseapp.com",
  projectId: "united-hacks",
  storageBucket: "united-hacks.appspot.com",
  messagingSenderId: "884092170155",
  appId: "1:884092170155:web:fdf00a4eb19d5c61ee2cee",
  measurementId: "G-9YQCSEV4KH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let user = writable<null | User>(null);
auth.onAuthStateChanged((u) => {
  user.set(u);
});
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, user, app, db };