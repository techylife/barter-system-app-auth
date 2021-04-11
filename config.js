import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAAADXu8aZLb8KlPVmPqFVQebQ-amJWbSo",
    authDomain: "barter-system-app-32c62.firebaseapp.com",
    projectId: "barter-system-app-32c62",
    storageBucket: "barter-system-app-32c62.appspot.com",
    messagingSenderId: "657438583120",
    appId: "1:657438583120:web:2405cd2001f163bf746455",
    measurementId: "G-677K45WJH5"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
