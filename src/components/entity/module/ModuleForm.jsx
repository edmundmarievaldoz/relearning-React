import Action from '../../UI/Actions';
import './ModuleForm.scss';

function ModuleForm ({onCancel}) { //the onCancel prop lives in the module.jsx file
    //initialisation...
    //state...
    //handlers...
    //view...
    return (
        <div className='moduleForm'>
            <p>This is the Form</p>
            <Action.Tray>
                <Action.Cancel showText buttonText='Cancel' onClick={onCancel} /> {/*we call it here */}
            </Action.Tray>

        </div>

    );
}

export default ModuleForm;