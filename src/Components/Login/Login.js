import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div style={{ height: '500px' }} className="row justify-content-center mx-0 align-items-center" >
            <div className="col-md-4 align-items-center d-flex flex-column">
                <h3 >Welcome,</h3>
                <p className="text-secondary" > Sign in to continue </p>
                <div className="google-btn mt-5">
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