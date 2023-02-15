//import * as firebase from 'firebase/compat/app';
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/firestore";

// Initialize Firebase
const firebaseConfig = {
  // Add your Firebase configuration here
  apiKey: "AIzaSyCsMObgCqZh7MF8JhQkHmrvadapQe3rRug",
  authDomain: "capstone-c7e35.firebaseapp.com",
  projectId: "capstone-c7e35",
  storageBucket: "capstone-c7e35.appspot.com",
  messagingSenderId: "173388611988",
  appId: "1:173388611988:web:7ad54b9393c6877bcdcf81",
  measurementId: "G-HK08E3YJ4G",
};

firebase.initializeApp(firebaseConfig);

// // Get a reference to the file in Firebase Storage
// const storageRef = firebase.storage().ref("Audio1.mp3");

// // Get the URL of the file
// storageRef.getDownloadURL().then((url) => {
//   // Add the URL as a value in the Realtime Databasee
//   firebase.database().ref("Audio1.mp3").set(url);
// });

// Get a reference to the Firebase Storage bucket
const storage = firebase.storage();
const storageRef = storage.ref();

// Get a reference to the Firestore database
const db = firebase.firestore();

//Set up arrays to add everything to the database
let name: string[] = ["Audio1.mp3", "Audio2.mp3", "Audio3.mp3", "Audio4.mp3", "Audio5.mp3", "Audio6.mp3", "Audio7.mp3", "Audio8.mp3", "Audio9.mp3", "Audio10.mp3"];
let category: string[] = ["Climate/", "Energy/", "Weather/", "Atmosphere/", "Emissions/", "Fossil Fuels/", "Sea Level/", "Temperature/", "Natural Gas/", "Global/"]

for (let i = 0; i < name.length; i++) {
// Get a reference to the file in Firebase Storage
const fileRef = storageRef.child(name[i]);

// Get a URL for the file
fileRef
  .getDownloadURL()
  .then((url) => {
    // Add the URL to the Firestore database
    db.collection(category[i])
      .add({
        url: url,
        name: name[i],
      })
      .then(() => {
        console.log("File URL added to Firestore database");
        console.log(url);
      })
      .catch((error) => {
        console.error("Error adding file URL to Firestore database", error);
      });
  })
  .catch((error) => {
    console.error("Error getting file URL", error);
  });

}

export default firebase;
