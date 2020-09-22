import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

const GoogleLogin = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        // name: '',
        // email: '',
        // password: '',
        // error: '',
        // sucess: false
    })
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                // const { displayName, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    // name: displayName,
                    // email: email
                }
                setUser(signedInUser);
                // console.log(displayName, email);
            })
            .catch(err => {
                console.log(err);
                console.log(err.meassage);
            })
    }
    return (
        <div>
              {
                    user.isSignedIn ? <p className="google-btn"><button onClick={handleSignIn} className="google-signIn"> out</button></p> : <p className="google-btn"><button onClick={handleSignIn} className="google-signIn">Continue with Google</button></p>
                }
                  {/* {
                    user.isSignedIn && <div>
                        <p> Welcome, {user.name}</p>
                    </div>
                } */}
            
        </div>
    );
};

export default GoogleLogin;