import { useState, useEffect } from 'react';
import apiURL from '../../api/apiURL.js';
import API from '../../api/API.js';
import Action from '../../UI/Actions';
import Spacer from '../../UI/Spacer.jsx';
import './ModuleForm.scss';


const initialModule = {
    ModuleName: null,
    ModuleCode: null,
    ModuleLevel: null,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: 
        'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg'

}

function ModuleForm ({onSubmit, onCancel}) { //the onCancel prop lives in the module.jsx file
    //initialisation...

    const conformance = {
    js2html: {
        ModuleName: (value) => (value === null) ? '' : value,
        ModuleCode: (value) => (value === null) ? '' : value,
        ModuleLevel: (value) => (value === null) ? '0' : value,
        ModuleYearID: (value) => (value === null) ? '0' : value,
        ModuleLeaderID: (value) => (value === null) ? '0' : value,
        ModuleImageURL: (value) => (value === null) ? '' : value,
    }, //an object that converts our state variables to string that we can use in the form

    html2js: {
        ModuleName: (value) => (value === '' ? null : value),
        ModuleCode: (value) => (value === '' ? null : value),
        ModuleLevel: (value) => (value === '0') ? null : parseInt(value),
        ModuleYearID: (value) => (value === '0') ? null : parseInt(value),
        ModuleLeaderID: (value) => (value === '0') ? null : parseInt(value),
        ModuleImageURL: (value) => (value === '' ? null : value),
    },
}; //contains two objects that goes from js to html and vice versa

  const yearsEndpoint = `${apiURL}/years`;
  const staffEndpoint = `${apiURL}/users/staff`;

    //state.......................................................

    const [module, setModule] = useState (initialModule);

    const [years, setYears] = useState ();
    const [loadingYearsMessage, setLoadingYearsMessage] = useState("Loading Records...")

    const loadingYears = async (endpoint) => {
        const response = await API.get(endpoint);
        response.isSuccess ? setYears(response.result) 
        : setLoadingYearsMessage(`Loading error ${response.message}`);//apiGet was generalised so it does not need to be duplicated in the code
    };

    useEffect(() => {
    loadingYears(yearsEndpoint, setYears);
    }, [yearsEndpoint]);

    const [staff, setStaff] = useState ();
    const [loadingUserMessage, setLoadingUserMessage] = useState("Loading records...")

    const loadingStaff = async (endpoint) => {
        const response = await API.get(endpoint);
        response.isSuccess ? setStaff(response.result) 
        : setLoadingUserMessage(`Loading error ${response.message}`); 
    };


    useEffect(() => {
    loadingStaff(staffEndpoint, setStaff);
    }, [staffEndpoint]);

    //handlers...

    const handleChange = (event) => {
        const {name, value} = event.target;
        setModule({...module, [name]: conformance.html2js[name](value)});
    };

    const handleSubmit = () => onSubmit(module); //helps turn js to string

    //the event value will tell us what field and what is the new value

    //view...

    

    return (
        <div className='moduleForm'>
            <Spacer>
                <div className='FormTray'>

                <label>
                    Module Name:
                    <input type='text' name='ModuleName' value={conformance.js2html.ModuleName(module.ModuleName)} onChange={handleChange}/>
                </label>

                <label>
                    Module Code:
                    <input type='text' name='ModuleCode' value={conformance.js2html.ModuleCode(module.ModuleCode)} onChange={handleChange}/>
                </label>

                <label>
                    Module Level:
                    <select name='ModuleLevel' value={conformance.js2html.ModuleLevel(module.ModuleLevel)} onChange={handleChange}>
                        <option value={0} hidden>No Level Selected</option>
                        {
                            [3,4,5,6,7].map( (level) => 
                            <option key={level}>{level}</option> )
                        }
                    </select>
                    {/*this is an array that'll help map out what is inside */}
                    {/*will allow us to see the numbers in the array */}
                </label>

                
                <label>
                    Module Year:
                    { !years ? (
                        <p>{loadingYearsMessage}</p>
                    ) : (
                        <select name='ModuleYearID' value={conformance.js2html.ModuleYearID(module.ModuleYearID)} onChange={handleChange}>
                        <option value={0} hidden>No Year Selected</option>
                        {
                            years.map( (year) => 
                            <option key={year.YearID} value={year.YearID}>{year.YearName}</option> )
                        }
                    </select>
                    )}
                </label>{/*onChange signals form that users are making changes */}

                
                <label>
                    Module Leader:
                    { !staff ? (
                        <p>{loadingUserMessage}</p>
                    ) : (
                        <select name='ModuleLeaderID' value={conformance.js2html.ModuleLeaderID(module.ModuleLeaderID)} onChange={handleChange}>
                        <option value={0} hidden>No Module Leader Selected</option>
                        {
                            staff.map( (user) => 
                            <option key={user.UserID} value={user.UserID}>{`${user.UserFirstname} ${user.UserLastname}`}</option> )
                        }
                    </select>
                    )}
                </label>

                
                <label>
                    Module Image:
                    <input type='text' name='ModuleImageURL' value={conformance.js2html.ModuleImageURL(module.ModuleImageURL)} onChange={handleChange}/>
                </label>


            </div>

            <Action.Tray>
                <Action.Submit showText onClick={handleSubmit} />
                <Action.Cancel showText buttonText='Cancel' onClick={onCancel} /> {/*we call it here */}
            </Action.Tray>
            </Spacer>
        </div>

    );
}

export default ModuleForm;