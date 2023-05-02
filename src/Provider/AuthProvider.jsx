import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe;
    };
  }, []);
  const contextValue = { userRegister, userLogin, user };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
