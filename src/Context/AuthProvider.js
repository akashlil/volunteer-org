import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const allComponetDataPass = createContext();
const AuthProvider = ({ children }) => {
  const fireBaseDataAll = useFirebase();
  return (
    <allComponetDataPass.Provider value={fireBaseDataAll}>
      {children}
    </allComponetDataPass.Provider>
  );
};

export default AuthProvider;
