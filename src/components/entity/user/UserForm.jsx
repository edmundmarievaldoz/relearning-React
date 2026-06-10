import Action from '../../UI/Actions';
import './UserForm.scss';

function UserForm ({onCancel}) { //the onCancel prop lives in the module.jsx file
    //initialisation...
    //state...
    //handlers...
    //view...
    return (
        <div className='userForm'>
            <p>This is the Form</p>
            <Action.Tray>
                <Action.Cancel showText buttonText='Cancel' onClick={onCancel} /> {/*we call it here */}
            </Action.Tray>

        </div>

    );
}

export default UserForm;