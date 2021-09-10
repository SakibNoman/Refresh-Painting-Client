import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';



if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

//Checking admin or not
export const checkAdmin = async (email) => {
    const res = await fetch('https://morning-escarpment-96840.herokuapp.com/isAdmin', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    });
    return await res.json();
}


// Sign In with email password

export const signIn = (data) => {
    return firebase.auth().signInWithEmailAndPassword(data.email, data.password)

}

// Google Sign In

export const googleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
}