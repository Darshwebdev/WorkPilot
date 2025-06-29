import React, { createContext, useEffect, useState } from 'react';
import { getlocalstorage, setlocalstorage } from '../utils/LocalStorage';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
 
  const [userData, setUserData] = useState({
    employees:[],
    admin:[]
  });

  useEffect(() => {
    const employees = localStorage.getItem("employees");
    const admin = localStorage.getItem("admin");

    if (!employees || !admin) {
      setlocalstorage(); // Set default data
    }

    const data = getlocalstorage();
    setUserData(data); // This will now load updated tasks too
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
