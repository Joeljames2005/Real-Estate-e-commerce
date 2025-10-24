// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwe0qStrRKc-sY1X84OUSYI20N0e-BaJ0",
    authDomain: "realestate-d5629.firebaseapp.com",
    projectId: "realestate-d5629",
    storageBucket: "realestate-d5629.firebasestorage.app",
    messagingSenderId: "161382006957",
    appId: "1:161382006957:web:a3c175dc24e77e276a4624"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase Services
const auth = firebase.auth();
const db = firebase.firestore();
;



