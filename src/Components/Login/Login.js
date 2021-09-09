import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import loginImg from '../../images/loginImg.jpg';
import firebaseConfig from './firebase.config';
import './LoginCss.css';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [loginAsAdmin, setLoginAsAdmin] = useState(true);

    const { email } = loggedInUser;
    const { register, handleSubmit, formState: { errors } } = useForm();



    useEffect(() => {
        fetch('https://morning-escarpment-96840.herokuapp.com/isAdmin', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                const newLoggedInUser = { ...loggedInUser }
                newLoggedInUser.isAdmin = data;
                setLoggedInUser(newLoggedInUser)
            })
    }, [email])

    useEffect(() => {
        window.scrollTo({
            top: 10,
            left: 10,
            behavior: 'smooth'
        });
    }, [])

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email, photoURL } = result.user;
            setIsSignedIn(true)
            const signedInUser = { ...loggedInUser }
            signedInUser.name = displayName;
            signedInUser.email = email;
            signedInUser.photoURL = photoURL;
            signedInUser.isSignedIn = true
            setLoggedInUser(signedInUser)
            history.replace(from);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    const onSubmit = (data) => {
        if (data.email && data.password) {
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    const { displayName, email, photoURL } = res.user;
                    setIsSignedIn(true)
                    const signedInUser = { ...loggedInUser }
                    signedInUser.name = displayName;
                    signedInUser.email = email;
                    signedInUser.photoURL = photoURL;
                    signedInUser.isSignedIn = true
                    setLoggedInUser(signedInUser)
                    history.replace(from);
                })
                .catch(err => {
                    const errorMessage = err.message;
                    console.log(errorMessage);
                })
        }
    }

    // const handleChange = (e) => {
    //     if (e.target.id === 'admin') setLoginAsAdmin(true);
    //     if (e.target.id === 'user') setLoginAsAdmin(false);
    // }



    return (
        <div className="row justify-content-center mx-0 align-items-center mb-5" >
            <div className="col-md-6 align-items-center d-flex flex-column">
                <h3 >Welcome,</h3>
                <p className="text-secondary" > Sign in to continue </p>
                <small>1) Sign In with default id,password for testing admin panel</small>
                <small>2) Sign In with google for testing user dashboard</small>
                {/* <div>
                    <input onChange={(e) => handleChange(e)} type="radio" name="isAdmin" id="admin" /> <label htmlFor="admin">Login as admin</label>
                </div>
                <div>
                    <input onChange={(e) => handleChange(e)} type="radio" name="isAdmin" id="user" /> <label htmlFor="user">Login as user</label>
                </div> */}
                <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="form-control" defaultValue={loginAsAdmin ? "admin@refresh.web.app" : "user@refresh.web.app"} {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger" >Email is required</span>}
                    {/* include validation with required or other standard HTML validation rules */}
                    <input className="form-control mt-3" type="password" defaultValue={loginAsAdmin ? "refreshadmin" : "refreshuser"} {...register("password", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.password && <span className="text-danger" >Password is required</span>}

                    <input className="btn btn-outline-danger btn-block mt-3" type="submit" value="Login" />
                </form>
                <p className="mt-3 text-secondary" >---------- or ----------</p>
                <div onClick={handleGoogleSignIn} className="google-btn mt-1">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    </div>

                    <p className="btn-text"><b>Sign in with google</b></p>
                </div>
            </div>
            <div className="col-md-6 d-md-block d-none" >
                <img className="w-75" src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default Login;