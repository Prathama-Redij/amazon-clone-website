import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYy3jm7lOS_7BgGonOzFs_zmfS-IHEf9o",
    authDomain: "e-clone-53fab.firebaseapp.com",
    projectId: "e-clone-53fab",
    storageBucket: "e-clone-53fab.appspot.com",
    messagingSenderId: "449062101484",
    appId: "1:449062101484:web:2bcac2e16cf67d56e120c9"

})
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };