// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZndBymcVMlRI0Qw3WjHnngPb9FMRbnnw",
    authDomain: "ecommerce-30618.firebaseapp.com",
    projectId: "ecommerce-30618",
    storageBucket: "ecommerce-30618.appspot.com",
    messagingSenderId: "918560684303",
    appId: "1:918560684303:web:679d9167b5c610f7cca67a",
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore;
