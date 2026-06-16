import { useState } from "react";
import useLoad from "../api/useLoad.js";
import apiURL from "../api/apiURL.js";
import API from "../api/API.js"
import Spacer from "../UI/Spacer.jsx";
import Action from "../UI/Actions.jsx";
import ModuleForm from "../entity/module/ModuleForm.jsx";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";

function Modules () {

  //initialisation
  const myModulesEndpoint = `${apiURL}/modules`;
  const postModulesEndpoint = `${apiURL}/modules`;


  //state
  const [showForm, setShowForm] = useState(false); //form is closed as thid id the state
  const [modules, loadingMessage, loadModules] = useLoad(myModulesEndpoint);


  //handler
  const handleAdd = () => {setShowForm(true)};

  const handleCancel = () => {setShowForm(false)};

  const handleSubmit = async(module) => {
    const result = await API.post(postModulesEndpoint, module); 
    if(result.isSuccess) {
      setShowForm(false); //closes form
      loadModules(myModulesEndpoint); //reloads the api so the new module added is posted
    }
    else alert(`Submission Failed: ${result.message}`)
  };


  //views
    return (
        <>
        <h1>Module List</h1>

        <Spacer>
            { !showForm ? (
            <Action.Tray>
              <Action.Add showText buttonText='Add New Module' onClick={handleAdd}/> {/*TBC bc girlfriend told me to get off my laptop and get a life :P */}
            </Action.Tray>
          ) : (

            <ModuleForm onSubmit={handleSubmit} onCancel={handleCancel}/>
          )}

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