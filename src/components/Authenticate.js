import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyByoTRGQXncbUEv6Nvoabm4eRJlOLoMySQ",
    authDomain: "chairs-3190f.firebaseapp.com",
    projectId: "chairs-3190f",
    storageBucket: "chairs-3190f.appspot.com",
    messagingSenderId: "149730349371",
    appId: "1:149730349371:web:a3846bc72fa3cf73afe71e",
    measurementId: "G-1317173850"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  

const Authenticate = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if a user is already logged in
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log('Google login error:', error);
      });
  };

  const handleEmailAndPasswordLogin = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log('Email/password login error:', error);
      });
  };

  const handleLogout = () => {
    firebase.auth().signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log('Logout error:', error);
      });
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName || user.email}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login or Register</h2>
          <button onClick={handleGoogleLogin}>Login with Google</button>
          <form onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            handleEmailAndPasswordLogin(email, password);
          }}>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login with Email/Password</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Authenticate;