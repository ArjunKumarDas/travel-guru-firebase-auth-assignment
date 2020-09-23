import React, { useContext, useState } from 'react';

import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { initializeLoginFramwork, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './FirebaseInfo';


const Login = () => {
   
    //   ------ ----- Email state declear -------------//
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })
     
    initializeLoginFramwork();
    
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
const history = useHistory() ;
const location = useLocation();
const { from } = location.state || { from: { pathname: "/" } };

// Google Sign In
const googleSignIn = () =>{
    handleGoogleSignIn() 
    .then (res => {
     userResponse(res, true);
    })
}

// Fb sign In
const fbSignIn = () =>{
    handleFbSignIn()
    .then(res =>{
    userResponse(res, true);
    })
}

const userResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res)
    if(redirect){
        history.replace(from);
    }
}
    // Gmail From validation 
    const handleBlur = (e) => {
        let isFormVailed = true;
        if (e.target.name === 'email') {
            isFormVailed = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            const isPasswordValied = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormVailed = isPasswordValied && passwordHasNumber;
        }
        if (isFormVailed) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        // console.log(user.email, user.password);
        if (user.email && user.password) {
           createUserWithEmailAndPassword(user.name, user.name, user.password)
           .then(res => {
           userResponse(res, true);
           })
            }
      if (!newUser && user.email && user.password){
           signInWithEmailAndPassword(user.email, user.password)
           .then(res => {
            setUser(res);
            userResponse(res, true);
        })
        }
        e.preventDefault();
    }

    return (
        <div className="login">
            <div className="gmail-part">
                <div className="login-from">
                    <form onSubmit={handleSubmit}>
                        {
                            newUser ? <h4>Create an account</h4> : <h4>Login</h4>
                        }
                        <br />
                        {newUser && <div><input name="name" type="text" onBlur={handleBlur} placeholder="First Name" />
                            <br />
                            <input name="name" type="text" onBlur={handleBlur} placeholder="Last Name" /></div>
                        }

                        <input type="text" name="email" onChange={handleBlur} placeholder="User Name or Email" required />
                        <br />
                        <input type="password" name="password" onChange={handleBlur} placeholder="password" required />
                        <br/>
                      
                        <input type="submit" value={ newUser ? 'Create an account' : 'Login'}/>
                        <br />
                        <div>
                            {
                                newUser ? <div>Already have an account<Link onClick={() => setNewUser(!newUser)}>Login</Link></div> : <div>Don't have an acount ? <Link onClick={() => setNewUser(!newUser)}>Create an account</Link></div>

                            }

                        </div>
                    </form>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {
                        user.success && <p style={{ color: 'green' }}>User {newUser ? 'Create an acccount' : 'Logged in '} sucessfully</p>
                    }
                </div>
            </div>
            <div className="google-fb">
                <div> 
                {
                    user.isSignedIn ? <p className="google-btn"><button onClick={googleSignIn} className="google-signIn">Sign Out</button></p> : <p className="google-btn"><button onClick={googleSignIn} className="google-signIn">Continue with Google</button></p>
                }
                 </div>
                 <p className="google-btn"><button onClick={fbSignIn} className="google-signIn">Continue with Facebook</button></p>
            </div>
        </div>
    );
};

export default Login;





