import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCZrhDPHGrA6gDajNYVqAZgPneJRA_PSjI",
  authDomain: "linkedin-clone-3a8ee.firebaseapp.com",
  projectId: "linkedin-clone-3a8ee",
  storageBucket: "linkedin-clone-3a8ee.appspot.com",
  messagingSenderId: "237787352240",
  appId: "1:237787352240:web:6857b0e4a670cafe647f75",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();
