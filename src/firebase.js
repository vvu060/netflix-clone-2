import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRzdJWviKoIYD5ROICQTMJ_K221wdT4Oo",
  authDomain: "netflix-clone-a4f59.firebaseapp.com",
  projectId: "netflix-clone-a4f59",
  storageBucket: "netflix-clone-a4f59.appspot.com",
  messagingSenderId: "143798293652",
  appId: "1:143798293652:web:942bf13841fb081abf5081",
  measurementId: "G-HTG2K5PVDT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
