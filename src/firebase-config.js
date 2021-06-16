import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyA2q_DvZkF_WDG-Ydaiqkdy1Rbk3JZP0Tc",
    authDomain: "inventory-management-app-67a8b.firebaseapp.com",
    projectId: "inventory-management-app-67a8b",
    storageBucket: "inventory-management-app-67a8b.appspot.com",
    messagingSenderId: "863529024851",
    appId: "1:863529024851:web:9c6718ea6c79622dabf5a6"
};

firebase.initializeApp(firebaseConfig)

export const databaseRef = firebase.firestore()

export default firebase