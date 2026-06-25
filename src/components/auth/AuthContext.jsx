import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
      // Initialisation ---------------
      const initialUser = {
        UserID: 820,
        UserFirstname:'Hunter',
        UserUsertype: 1,
    };
    
    // State ------------------------------
    const [loggedInUser, setLoggedInUser] = useState(initialUser);
    
    // Handlers ----------------------------
    const login = (user) => setLoggedInUser(user);
    const logout = () => setLoggedInUser(null);

    // View --------------------------------

    return (
        <AuthContext value= {{ loggedInUser, login, logout }}>
            {children}
        </AuthContext>
    );
};

export const UseAuth = () => useContext(AuthContext);

