import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3kEzMyvRjogcFSIwFyLUyu5AbB-yfCik",
    authDomain: "clone-496d8.firebaseapp.com",
    projectId: "clone-496d8",
    storageBucket: "clone-496d8.appspot.com",
    messagingSenderId: "432761139571",
    appId: "1:432761139571:web:a5e4364442b9797978d506",
    measurementId: "G-9V9K3TZW1C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export  { db, auth};