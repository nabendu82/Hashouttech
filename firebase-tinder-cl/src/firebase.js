import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC3pf4L0-sX5y6Tg1sN0XWI61JV-HPC6-M",
    authDomain: "fir-tinder-cl.firebaseapp.com",
    projectId: "fir-tinder-cl",
    storageBucket: "fir-tinder-cl.appspot.com",
    messagingSenderId: "1068733317536",
    appId: "1:1068733317536:web:a3ed46193e4c5c06a1a4c5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

export default db