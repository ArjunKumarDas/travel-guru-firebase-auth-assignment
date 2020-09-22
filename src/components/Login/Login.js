import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import './Login.css'
import { Link } from 'react-router-dom';
import FacebookLogin from './FacebookLogin';
import GoogleLogin from './GoogleLogin';
// import FacebookLogin from '../FacebookLogin/FacebookLogin';
// import FacebookLogin from './FacebookLogin';
// import StayInfo from '../StayInfo/StayInfo';
// import { Link } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
const Login = () => {
    //   ------ ----- Email state declear -------------//
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        sucess: false
    })

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
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.sucess = true;
                    setUser(newUserInfo);
                    upddateUserName(user.name);
                   
                })
                .catch(error => {
                    // Handle Errors here.
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.meassage;
                    newUserInfo.sucess = false;
                    setUser(newUserInfo);
                    // ...
                });
                if (!newUser && user.email && user.password){
                    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .then(res => {
                        const newUserInfo = {...user};
                        newUserInfo.error ='';
                        newUserInfo.sucess = true;
                        setUser(newUserInfo);
                        // console.log('sign in info', res.user);
                    })
                    .catch(function(error) {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.meassage;
                    newUserInfo.sucess = false;
                    setUser(newUserInfo);
                      });
                }
        }
        e.preventDefault();
    }
    const upddateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
            
        }).then(function () {
           console.log('update name');
        }).catch(function (error) {
            console.log(error);
        });
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
                        <br />
                        {/* <p>Reember Me  <span> Forget password</span></p> */}
                        <br />
                        {/* {
                            newUser ? <input type="submit" value="Create an account" /> : <input type="submit" value="Login" />
                        } */}
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
                        user.sucess && <p style={{ color: 'green' }}>User {newUser ? 'Create an acccount' : 'Logged in '} sucessfully</p>
                    }
                </div>
            </div>
            <div className="google-fb">
                <p><GoogleLogin></GoogleLogin></p>
                 <p><FacebookLogin></FacebookLogin></p>
            </div>
        </div>
    );
};

export default Login;