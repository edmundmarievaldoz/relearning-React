import { useState, useEffect } from "react";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";

function Modules () {

  //initialisation

  const apiURL = 'https://softwarehub.uk/unibase/api';
  const myModulesEndpoint = `${apiURL}/modules`;


  //state

  const [modules, setModules] = useState(null);

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
        {
          !modules ? (
          
          <p>Loading records....</p>

          ):(
            <CardContainer>
                {
                modules.map((module) => {
                    return(
                    <ModuleCard  key={module.ModuleID} module={module}/>
                    )
                }) //map will go through the array content one by one
                }
            </CardContainer>
        )
      }
        </>

    );
}

export default Modules;