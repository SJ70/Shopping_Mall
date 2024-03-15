import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, deleteUser } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const signInEmail = (email: string, password: string) => {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  }
  catch (e) {
    throw new Error('존재하지 않는 아이디 / 잘못된 비밀번호')
  }
}

export const signUpEmail = (email: string, password: string) => {
  try {
  return createUserWithEmailAndPassword(auth, email, password);
  }
  catch (e) {
    throw e;
  }
}

export const isEmailDuplicated = async (email: string) => {
  try {
    const userCredential = await signUpEmail(email, 'password');
    await deleteUser(userCredential.user);
    return false;
  }
  catch (e) {
    return true;
  }
}