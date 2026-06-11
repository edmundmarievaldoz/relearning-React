import { useState } from 'react';
import Action from '../../UI/Actions';
import Spacer from '../../UI/Spacer.jsx';
import './ModuleForm.scss';


const initialModule = {
    ModuleName: 'Deleteable Module',
    ModuleCode: 'XYZ',
    ModuleLevel: 3,
    ModuleYearID: null,
    ModuleLeaderID: null,
    ModuleImageURL: 
        'https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg'

}

function ModuleForm ({onCancel}) { //the onCancel prop lives in the module.jsx file
    //initialisation...

    //state...

    const [module, setModule] = useState (initialModule);

    //handlers...

    const handleChange = (event) => {
        const {name, value} = event.target;
        setModule({...module, [name]: value});
    };

    const handleSubmit = () => {
        
    };

    //the event value will tell us what field and what is the new value

    //view...
    return (
        <div className='moduleForm'>
            <Spacer>
                <div className='FormTray'>

                <label>
                    Module Name:
                    <input type='text' name='ModuleName' value={module.ModuleName} onChange={handleChange}/>
                </label>

                <label>
                    Module Code:
                    <input type='text' name='ModuleCode' value={module.ModuleCode} onChange={handleChange}/>
                </label>

                <label>
                    Module Level:
                    <select name='ModuleLevel' value={module.ModuleLevel} onChange={handleChange}>
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
                    <input type='text' name='ModuleYear' value={module.ModuleYearID} onChange={handleChange}/> {/*onChange signals form that users are making changes */}
                </label>

                
                <label>
                    Module Leader:
                    <input type='text' name='ModuleLeader' value={module.ModuleLeaderID} onChange={handleChange}/>
                </label>

                
                <label>
                    Module Image:
                    <input type='text' name='ModuleImageURL' value={module.ModuleImageURL} onChange={handleChange}/>
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