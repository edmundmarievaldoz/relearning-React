import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import './Modules.scss';

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
                    <div className="moduleCard" key={module.ModuleID}>
                        <Card>
                        <p>{module.ModuleCode}</p>
                        <p>{module.ModuleName}</p>
                        <img src={module.ModuleImageURL}/>
                        </Card>
                    </div>
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