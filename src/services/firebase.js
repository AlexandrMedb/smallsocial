import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfJ-RtPHA7pqrMsC9acFeBqzpv7BgqhKQ",
  authDomain: "smalsocial.firebaseapp.com",
  databaseURL:
    "https://smalsocial-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "smalsocial",
  storageBucket: "smalsocial.appspot.com",
  messagingSenderId: "498076944814",
  appId: "1:498076944814:web:e751b385b8b802c0dde03f",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef = db.ref("Atarasov");
