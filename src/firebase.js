import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCijMFK7IhYhBAZshOhJhIWMsniHeKg4eo",
  authDomain: "kplc-facebook-clone.firebaseapp.com",
  projectId: "kplc-facebook-clone",
  storageBucket: "kplc-facebook-clone.appspot.com",
  messagingSenderId: "151856660266",
  appId: "1:151856660266:web:821b1f75d2425d0137e853",
  measurementId: "G-FJ36D0B3JT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
