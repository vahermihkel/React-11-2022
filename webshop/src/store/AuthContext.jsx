import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(determineIfLoggedIn());

  function determineIfLoggedIn () {
    if (sessionStorage.getItem("token") !== null) {
      return true;
    } else {
      return false;
    }
  }
  
  const loginHandler = (authToken) => {
    setIsLoggedIn(true);
    sessionStorage.setItem("token", authToken);
  }

  const logoutHandler = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
  }

  return(
    <AuthContext.Provider value={{
      loggedIn: isLoggedIn,
      // setLoggedIn: setIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}



export default AuthContext;