import "./Header.scss";
import { UseAuth } from "../auth/AuthContext.jsx";


function Header() {
    // Initialisation
    const {loggedInUser} = UseAuth();

    // State

    //Handlers

    // Views

    return (
        <header>
            <h1>Basic React Demo</h1>
            {loggedInUser &&
            <p className ="welcome"> Welcome {loggedInUser.UserFirstname}!</p>
            }
        </header>
    );

}

export default Header;
