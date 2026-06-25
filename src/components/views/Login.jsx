import  './Login.scss';
import { useNavigate } from 'react-router-dom';
import Action from '../UI/Actions.jsx';
import { UseAuth } from '../auth/AuthContext.jsx';

const staff = {
    UserID: 820,
    UserFirstname:'Graeme',
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
    const navigate = useNavigate();
    // State ----------------------------------------------
    // Handlers -------------------------------------------
    const handleLogin = (user) => {
        login(user);
        navigate('/');
    };


    // Views ----------------------------------------------

    return (
        <>
            <h1>Login</h1>

            <Action.Tray>
                <Action.Add showText buttonText='Log in As Student' onClick={() => handleLogin(student)} />
                <Action.Add showText buttonText='Log in As Lecturer' onClick={() => handleLogin(staff)}/>
            </Action.Tray>
        
        </>

    );
}

export default Login;