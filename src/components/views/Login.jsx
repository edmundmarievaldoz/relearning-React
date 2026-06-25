
import  './Login.scss';
import Action from '../UI/Actions.jsx';
import { UseAuth } from '../auth/AuthContext.jsx';

const staff = {
    UserID: 820,
    UserFirstname:'Hunter',
    UserUsertype: 1,
};

const student = {
    UserID: 276,
    UserFirstname: 'Hashim',
    UserUsertype: 2
};

const Login = () => {
    // Initialisation--------------------------------------
    const { login } = UseAuth();
    // State ----------------------------------------------
    // Handlers -------------------------------------------
    // Views ----------------------------------------------

    return (
        <>
            <h1>Login</h1>

            <Action.Tray>
                <Action.Add showText buttonText='Log in As Student' onClick={() => login(student)} />
                <Action.Add showText buttonText='Log in As Lecturer' onClick={() => login(staff)}/>
            </Action.Tray>
        
        </>

    );
}

export default Login;