import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDEBgl5hOOY_NcwViHB_9Dz_NGA_ZhkDfo",
    authDomain: "clone-66b4d.firebaseapp.com",
    projectId: "clone-66b4d",
    storageBucket: "clone-66b4d.appspot.com",
    messagingSenderId: "57659424228",
    appId: "1:57659424228:web:ac532d33a9f3776379dbf1",
    measurementId: "G-5E6DT0EVGJ"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };