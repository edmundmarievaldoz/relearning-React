import './ModuleCard.scss';
import { Card } from '../../UI/Card';

function ModuleCard ({module}) {
    //initialisation
    //state
    //handlers
    //view
    return (

        <div className="moduleCard" key={module.ModuleID}>
            <Card>
            <p>{module.ModuleCode}</p>
            <p>{module.ModuleName}</p>
            <img src={module.ModuleImageURL}/>
            </Card>
        </div>

    );
}

export default ModuleCard;