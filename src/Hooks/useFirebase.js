import FirebaseInit from "../Firebase/firebase.init";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

FirebaseInit();

const useFirebase = () => {
  const [dataloaded, setDataLoaded] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google sing in
  const googleWithLogin = () => {
    setDataLoaded(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  // age Reference after load
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setDataLoaded(false);
    });
  }, []);

  return {
    user,
    setUser,
    dataloaded,
    setDataLoaded,
    error,
    setError,
    googleWithLogin,
    logOut,
  };
};

export default useFirebase;
