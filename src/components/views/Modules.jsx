import {UseAuth} from '../auth/AuthContext.jsx';
import useLoad from "../api/useLoad.js";
import apiURL from "../api/apiURL.js";
import API from "../api/API.js"
import { Modal, useModal } from "../UI/Modal.jsx";
import { Alert, useAlert, ErrorAlert } from "../UI/Alert.jsx";
import Spacer from "../UI/Spacer.jsx";
import Action from "../UI/Actions.jsx";
import ModuleForm from "../entity/module/ModuleForm.jsx";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";

function Modules () {

  //initialisation
  const { loggedInUser } = UseAuth();

  const myModulesEndpoint = 
    loggedInUser.UserUsertypeID === 1 
      ? `${apiURL}/modules/leader/${loggedInUser.UserID}`
      : `${apiURL}/modules/users/${loggedInUser.UserID}`;
  const postModulesEndpoint = `${apiURL}/modules`;


  //state
  const [modules, loadingMessage, loadModules] = useLoad(myModulesEndpoint);
  const [isFormOpen, openForm, closeForm] = useModal(false); //from useModal, form is initially closed hence "false"
  const [isAlertOpen, alertMessage, openAlert, closeAlert] = useAlert(); //from useModal, form is initially closed hence "false"
  const [isErrorOpen, ErrorMessage, openError, closeError] = useAlert(); //from useModal, form is initially closed hence "false"

  //handler

  const handleSubmit = async(module) => {
    const result = await API.post(postModulesEndpoint, module); 
    if(result.isSuccess) {
      closeForm(); //calls closeForm function from useModal 
      loadModules(myModulesEndpoint); //reloads the api so the new module added is posted
      openAlert('Module Submitted Successfully')
    }
    else openError(`Submission Failed: ${result.message}`)
  };


  //views
    return (
        <>
        <h1>Module List</h1>
        
        { isFormOpen && (
        <Modal title='Add a New Module'>
          <ModuleForm onSubmit={handleSubmit} onCancel={closeForm}/> {/**closeForm function use in onCancel button */}
        </Modal>
        )}

        {isAlertOpen && <Alert message={alertMessage} onDismiss={closeAlert} />}
        {isErrorOpen && <ErrorAlert message={ErrorMessage} onDismiss={closeError} />}

        <Spacer>
            <Action.Tray>
              <Action.Add showText buttonText='Add New Module' onClick={openForm}/> {/*TBC bc girlfriend told me to get off my laptop and get a life :P */}
            </Action.Tray>

        {
          !modules ? (
          
          <p>{loadingMessage}</p>

          ):(
            <CardContainer>
                {
                modules.map((module) => <ModuleCard  key={module.ModuleID} module={module}/>)} {/*map will go through the array content one by one */}
                
            </CardContainer>
        )
      }
        </Spacer>
        </>

    );
}

export default Modules;