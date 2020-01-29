import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDrET1JIWz_pN8LK1fNshPbtDncrNtzVKU",
    authDomain: "easille-db.firebaseapp.com",
    databaseURL: "https://easille-db.firebaseio.com",
    projectId: "easille-db",
    storageBucket: "easille-db.appspot.com",
    messagingSenderId: "1056910621353",
    appId: "1:1056910621353:web:a5ceb9aaebdd918b41c7b8",
    measurementId: "G-DG02S18R16"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;