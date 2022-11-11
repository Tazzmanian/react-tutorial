import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJkMeb6yY4CEy2oi4d4_3ja6fqxANjkgw",
    authDomain: "tutorial-98634.firebaseapp.com",
    databaseURL: "https://tutorial-98634.firebaseio.com",
    projectId: "tutorial-98634",
    storageBucket: "tutorial-98634.appspot.com",
    messagingSenderId: "675546362949",
    appId: "1:675546362949:web:31ba96e8ee90ffdeb59f2c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log('TTT', snapShot.exists, userAuth.uid);

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }

    return userRef;
};

export default firebase;