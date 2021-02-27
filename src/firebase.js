import firebase from "firebase/app"
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDtLl9Y5c07JvZ__jbGeKee2FAJ6PO1wDw",
    authDomain: "dothis-app.firebaseapp.com",
    databaseURL: "https://dothis-app-default-rtdb.firebaseio.com",
    projectId: "dothis-app",
    storageBucket: "dothis-app.appspot.com",
    messagingSenderId: "70884605667",
    appId: "1:70884605667:web:d4474f6e102651cba30fd6",
    measurementId: "G-LLG0NYKDQQ"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics()

export default firebase;