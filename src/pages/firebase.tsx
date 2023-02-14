//import * as firebase from 'firebase/compat/app';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";
import 'firebase/compat/firestore';

// Initialize Firebase
const firebaseConfig = {
  // Add your Firebase configuration here
    apiKey: "AIzaSyCsMObgCqZh7MF8JhQkHmrvadapQe3rRug",
  authDomain: "capstone-c7e35.firebaseapp.com",
  projectId: "capstone-c7e35",
  storageBucket: "capstone-c7e35.appspot.com",
  messagingSenderId: "173388611988",
  appId: "1:173388611988:web:7ad54b9393c6877bcdcf81",
  measurementId: "G-HK08E3YJ4G"
};

firebase.initializeApp(firebaseConfig);

// // Get a reference to the file in Firebase Storage
// const storageRef = firebase.storage().ref("Audio1.mp3");

// // Get the URL of the file
// storageRef.getDownloadURL().then((url) => {
//   // Add the URL as a value in the Realtime Database
//   firebase.database().ref("Audio1.mp3").set(url);
// });

// Get a reference to the Firebase Storage bucket
const storage = firebase.storage();
const storageRef = storage.ref();


// Get a reference to the Firestore database
const db = firebase.firestore();

// Get a reference to the file in Firebase Storage
const fileRef = storageRef.child("Audio1.mp3");

// Get a URL for the file
fileRef.getDownloadURL().then((url) => {
    // Add the URL to the Firestore database
    db.collection('audio3/').add({
      url: url,
      name: "Audio1.mp3"
    }).then(() => {
      console.log('File URL added to Firestore database');
    }).catch((error) => {
      console.error('Error adding file URL to Firestore database', error);
    });
  }).catch((error) => {
    console.error('Error getting file URL', error);
  });

  export default firebase;