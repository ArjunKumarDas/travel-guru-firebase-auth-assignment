import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import './Login.css'
import StayInfo from '../StayInfo/StayInfo';
import { Link } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    const  [user, setUser] = useState({
        isSignedIn : false,
        name: '',
        email:''
    })
    const provider =  new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
            setUser(signedInUser);
            console.log(displayName, email);
        })
        .catch(err => {
            console.log(err);
            console.log(err.meassage);
        })
    }
//  const handleBlur = (e) => {
//      let isFormVailed;
//      if(e.target.name === 'eamil'){
//         const isFormVailed = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.value);
      
//      }
//      if(e.target.name === 'password'){
//         const isPasswordValied = e.target.value.length > 6;
//         const passwordHasNumber =  /\d{1}/.test(e.target.value);
//         isFormVailed = isPasswordValied && passwordHasNumber;
//      }
//  }   if  (isFormVailed){

//  }
//  const handleSubmit = () =>{

//  }
    return (
        <div className="login">
           <div className="gmail-part">
               <div className="login-from">
            {/* <form onLogin={handleSubmit}>
               <h4>Login</h4>
                 <br/>
                 <input type="text" name="email" onChange={handleBlur} placeholder="User Name or Email" required/>
                 <br/>
                 <input type="password" name="password" onChange={handleBlur} placeholder="password" required/>
                 <br/>
                 <p>Reember Me  <span> Forget password</span></p>
                 <br/>
                 <input type="submit" value="Submit"></input>
                 <br/>
                 <p>Don't have an acount ? <span>Create an account</span></p>
            </form> */}
            </div>
           </div>
           <div className="google-fb">
               <p></p>
                {
                  user.isSignedIn ? <Link to="/stayinfo"><StayInfo></StayInfo></Link> : <p className="google-btn"><button onClick={handleSignIn} className="google-signIn">Continue with Google</button></p>
                }
            {/* {                 
                  user.isSignedIn ? <p className="google-btn"><button onClick={handleSignIn} className="google-signIn"> out</button></p> : <p className="google-btn"><button onClick={handleSignIn} className="google-signIn">Continue with Google</button></p>
                } */}

              
              {
                  user.isSignedIn && <div>
                      <p> Welcome, {user.name}</p>
                  </div>
              }



              <p className="google-btn"><button className="google-signIn">Continue with Facebook</button></p>
              
           </div>
        </div>
    );
};

export default Login;