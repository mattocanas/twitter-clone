import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAns8e1HhbZgYZDMR6sGupqZM1AL6gI9jA",
  authDomain: "twitter-clone-fdb03.firebaseapp.com",
  databaseURL: "https://twitter-clone-fdb03.firebaseio.com",
  projectId: "twitter-clone-fdb03",
  storageBucket: "twitter-clone-fdb03.appspot.com",
  messagingSenderId: "410514108452",
  appId: "1:410514108452:web:e28ffee5180334ae43e8b1",
  measurementId: "G-11KGJE0RVN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
