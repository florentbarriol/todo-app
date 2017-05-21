import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyA-tTrFK33nZsjN1SjamOqngaJw0OvRYiY",
    authDomain: "todo-app-de629.firebaseapp.com",
    databaseURL: "https://todo-app-de629.firebaseio.com",
    projectId: "todo-app-de629",
    storageBucket: "todo-app-de629.appspot.com",
    messagingSenderId: "606726319759"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;