import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider
export{AuthContext}