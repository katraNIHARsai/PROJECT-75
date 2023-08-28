import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDOZH279a6bYiQqV_3wE4aFfdeSB49WbLE",
  authDomain: "project-71-f328a.firebaseapp.com",
  projectId: "project-71-f328a",
  storageBucket: "project-71-f328a.appspot.com",
  messagingSenderId: "817505806598",
  appId: "1:817505806598:web:a7d453ba4ba47453ec1687"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
