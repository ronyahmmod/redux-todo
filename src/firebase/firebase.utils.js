import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDKAvMl4xJz--Ybo2LosvMmKCUtRKIO05w",
  authDomain: "redux-todo-2e5f4.firebaseapp.com",
  databaseURL: "https://redux-todo-2e5f4.firebaseio.com",
  projectId: "redux-todo-2e5f4",
  storageBucket: "redux-todo-2e5f4.appspot.com",
  messagingSenderId: "494402732443",
  appId: "1:494402732443:web:97294478afd6a9b6c4a13e",
  measurementId: "G-RSL8D3KDZC",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const docRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await docRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await docRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return docRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
