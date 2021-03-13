import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4GAI-_E3vEfRNyYBshskZCLuLGcneHtU",
    authDomain: "bt3103-week-6-613bf.firebaseapp.com",
    projectId: "bt3103-week-6-613bf",
    storageBucket: "bt3103-week-6-613bf.appspot.com",
    messagingSenderId: "969910693359",
    appId: "1:969910693359:web:d5bd804f2eeeb8beea9a1a",
    measurementId: "G-CBND25JPP9"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;