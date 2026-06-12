import { useState, useEffect } from "react";
import Spacer from "../UI/Spacer.jsx";
import Action from "../UI/Actions.jsx";
import ModuleForm from "../entity/module/ModuleForm.jsx";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";

function Modules () {

  //initialisation

  const apiURL = 'https://softwarehub.uk/unibase/api';
  const myModulesEndpoint = `${apiURL}/modules`;
  const postModulesEndpoint = `${apiURL}/modules`;


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

    const apiPOST = async (endpoint, record) => {
      //build a request object
      const request = {
        method: 'POST', 
        body: JSON.stringify(record),
        headers: {'Content-Type': 'application/json'},
      }
      //call the fetch
    const response = await fetch(endpoint, request);
    const result = await response.json();

    return (response.status >= 200 && response.status < 300) ? {
      isSuccess: true,
    } : {
      isSuccess: false,
      message: result.message
    };
  };

  //handler
  const handleAdd = () => {setShowForm(true)};

  const handleCancel = () => {setShowForm(false)};

  const handleSubmit = async(module) => {
    const result = await apiPOST(postModulesEndpoint, module);
    if(result.isSuccess) alert("Submission Successful");
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
          
          <p>Loading records....</p>

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