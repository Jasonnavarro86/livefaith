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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;
      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      
      if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch(error){
          console.log('error creating user', error)
        }
      }
      return userRef;
  }

 
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;