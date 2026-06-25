import { UseAuth } from "../auth/AuthContext.jsx";
import { NavLink } from "react-router-dom";
import './Navbar.scss';

function Navbar() {

    //initalisation -----------------------
    const { logout } = UseAuth();
    return (
        <nav>
            <div className='navItem'>
                <NavLink to="/">Home</NavLink>
            </div>
            <div className='navItem'>
                <NavLink to="/modules">Modules</NavLink>
            </div>
            <div className='navItem'>
                <NavLink to="/students">Students</NavLink>
            </div>
            <div className='navItem'>
                <NavLink to='/login'>Log In</NavLink>
            </div>
            <div className='navItem'>
                <NavLink to='studentmodule' onClick={logout}>Log out</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;