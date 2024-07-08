// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore ,getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9nVjh1Pfx7CIjrRsWyuqcai82iudJSFo",
  authDomain: "trial-93565.firebaseapp.com",
  projectId: "trial-93565",
  storageBucket: "trial-93565.appspot.com",
  messagingSenderId: "73680633794",
  appId: "1:73680633794:web:3c9df0fd1b85369890a05b",
  measurementId: "G-FN8TKNBQ47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 //init services
 const db = getFirestore();

 //collection ref
//  const ColRef = collection(db,'About');

 //get collection data
//  getDocs(ColRef)
//  .then((snapshot) =>{
//   console.log(snapshot.docs)
//  })
export {db}
