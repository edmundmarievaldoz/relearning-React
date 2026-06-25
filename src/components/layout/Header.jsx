import "./Header.scss";
import AuthContext from "../auth/AuthContext.js";
import { useContext } from "react";

function Header() {
    // Initialisation
    const loggedInUser = useContext(AuthContext);

    // State

    //Handlers

    // Views

    return (
        <header>
            <h1>Basic React Demo</h1>
            <p className ="welcome"> Welcome {loggedInUser.UserFirstname}!</p>
        </header>
    );

}

export default Header;

//props have been passed in from the parent component 
// (App.jsx) and can be used in this child component (Header.jsx) 
// to display the logged in user's name.