import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const handleSignIn = () => {
  const email = sessionStorage.getItem("chatUserEmail");
  const password = sessionStorage.getItem("chatUserPassword");
  try {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  } catch (err) {
    console.log(err);
  } 
};
