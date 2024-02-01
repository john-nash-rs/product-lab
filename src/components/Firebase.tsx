//npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp, getApps} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvfr2UXbfdHS9I42-ZLRraYNebMq2TIdo",
  authDomain: "clone-media-player.firebaseapp.com",
  projectId: "clone-media-player",
  storageBucket: "clone-media-player.appspot.com",
  messagingSenderId: "150314878383",
  appId: "1:150314878383:web:a6fd0ec45e08629bca1b5a"
};

// Initialize Firebase

let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;

