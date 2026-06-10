import { useState, useEffect } from "react";
import Action from "../UI/Actions.jsx";
import ModuleForm from "../entity/module/ModuleForm.jsx";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";

function Modules () {

  //initialisation

  const apiURL = 'https://softwarehub.uk/unibase/api';
  const myModulesEndpoint = `${apiURL}/modules`;


  //state

  const [modules, setModules] = useState(null);
  const [showForm, setShowForm] = useState(false); //form is closed as thid id the state

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setModules(result);
  };

  useEffect(() => {
    apiGet(myModulesEndpoint);
  }, [myModulesEndpoint]);

  //handler

  //views
    return (
        <>
        <h1>Module List</h1>

        { !showForm ? (
            <Action.Tray>
              <Action.Add showText buttonText='Add New Module' /> {/*TBC bc girlfriend told me to get off my laptop and get a life :P */}
            </Action.Tray>
          ) : (

            <ModuleForm />
          )}

        {
          !modules ? (
          
          <p>Loading records....</p>

          ):(
            <CardContainer>
                {
                modules.map((module) => <ModuleCard  key={module.ModuleID} module={module}/>)} {/*map will go through the array content one by one */}
                
            </CardContainer>
        )
      }
        </>

    );
}

export default Modules;