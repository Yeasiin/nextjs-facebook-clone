import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1VgjmxB0wWHD8NxSfw-uHIMzSMRAl76E",
  authDomain: "nxt-facebook.firebaseapp.com",
  projectId: "nxt-facebook",
  storageBucket: "nxt-facebook.appspot.com",
  messagingSenderId: "636337993168",
  appId: "1:636337993168:web:83216c6c6b6d7c78e4b5d5",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
