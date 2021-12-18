import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyB3SSiB56_cMv8-dh4iUfkvBG0Ki8pvw5Y",
  authDomain: "linkedin-clone-394fd.firebaseapp.com",
  projectId: "linkedin-clone-394fd",
  storageBucket: "linkedin-clone-394fd.appspot.com",
  messagingSenderId: "438150845890",
  appId: "1:438150845890:web:27dcd448a4307e7b16f25b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore() ;
const auth = firebase.auth() ;

export {db, auth}


