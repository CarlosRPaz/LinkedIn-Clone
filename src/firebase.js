import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDs3QoBZmOJbJJhjHubWlj882r53aFiyKM",
    authDomain: "linkedin-clone-56a5c.firebaseapp.com",
    projectId: "linkedin-clone-56a5c",
    storageBucket: "linkedin-clone-56a5c.appspot.com",
    messagingSenderId: "625434230035",
    appId: "1:625434230035:web:bd220bc4b510f3d1416ee6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // connects everything to firebase
const db = firebaseApp.firestore(); // access to database
const auth = firebase.auth();       // access to authentication

export { db, auth };                // need access to these elsewhere