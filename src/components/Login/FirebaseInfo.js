import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

export const initializeLoginFramwork = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
}

// google log in
export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email} =res.user
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                success: true
            };
           return signedInUser;
           
        })
        .catch(err => {
            console.log(err);
            console.log(err.meassage);
        })
}


// fb log in
export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
  return  firebase.auth().signInWithPopup(fbProvider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        user.success = true;
        return user;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
       console.log(errorCode, errorMessage, email, credential);
      });
}

export const createUserWithEmailAndPassword = (name, email, password) =>{
   return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
        console.log(res);
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        upddateUserName(name);
    return newUserInfo;
    })
    .catch(error => {
        const newUserInfo = {};
        newUserInfo.error = error.meassage;
        newUserInfo.success = false;
        return newUserInfo;
    });
}

export const signInWithEmailAndPassword =  (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
        const newUserInfo = res.user ;
        newUserInfo.error ='';
        newUserInfo.success = true;
        return newUserInfo;
      
    })
    .catch(function(error) {
    const newUserInfo = {};
    newUserInfo.error = error.meassage;
    newUserInfo.success = false;
    return newUserInfo;
      });
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

