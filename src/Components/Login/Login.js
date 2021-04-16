import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { UserContext } from "../../App";
import firebaseConfig from './firebase.config';
import './Login.css';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isSignedIn, setIsSignedIn] = useState(false);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            setIsSignedIn(true)
            const signedInUser = { name: displayName, email, photoURL, isSignedIn: true }
            setLoggedInUser(signedInUser)
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <div style={{ height: '500px' }} className="row justify-content-center mx-0 align-items-center" >
            <div className="col-md-4 align-items-center d-flex flex-column">
                <h3 >Welcome,</h3>
                <p className="text-secondary" > Sign in to continue </p>
                <div onClick={handleGoogleSignIn} className="google-btn mt-5">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    </div>
                    <p class="btn-text"><b>Sign in with google</b></p>
                </div>
            </div>
        </div>
    );
};

export default Login;