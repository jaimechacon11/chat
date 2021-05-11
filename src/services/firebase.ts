import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const { REACT_APP_APIKEY,REACT_APP_AUTHDOMAIN,REACT_APP_PROJECTID,REACT_APP_STORAGEBUCKET,REACT_APP_MESSAGINGSENDERI,REACT_APP_APPID } = process.env;

firebase.initializeApp({
    apiKey: REACT_APP_APIKEY,
    authDomain: REACT_APP_AUTHDOMAIN,
    projectId: REACT_APP_PROJECTID,
    storageBucket: REACT_APP_STORAGEBUCKET,
    messagingSenderId: REACT_APP_MESSAGINGSENDERI,
    appId: REACT_APP_APPID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, firestore, googleProvider, firebase };
