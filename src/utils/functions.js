
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

//register function to create new account

export const registerNewUser = async (email, password) => {
  try {
     await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err.message);
  }
};

//login function to login into personal account

export const loginUser = async (email, password) => {
  try {
     await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err.message);
  }
};

//logout function to get off from the personal account

export const logOut = async () => {
  await signOut(auth);
};
