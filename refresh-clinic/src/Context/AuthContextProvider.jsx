import React, { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  const login = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.setItem("isAuth", "false");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
