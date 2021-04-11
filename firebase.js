import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCKXVh-IbmBrZGyuraXDhHxondw3z-PNls",
    authDomain: "singal-clone-980ce.firebaseapp.com",
    projectId: "singal-clone-980ce",
    storageBucket: "singal-clone-980ce.appspot.com",
    messagingSenderId: "469129644272",
    appId: "1:469129644272:web:c6bf6e65d07d1ff4b99a35",
    measurementId: "G-P3J19BC1Q5"
};

let app;

if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };