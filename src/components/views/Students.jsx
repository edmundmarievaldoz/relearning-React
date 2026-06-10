import { useState, useEffect } from 'react';
import Spacer from '../UI/Spacer.jsx';
import Action from '../UI/Actions.jsx';
import UserForm from '../entity/user/UserForm.jsx';
import {CardContainer} from "../UI/Card.jsx";
import UserCard from '../entity/user/UserCard.jsx';

function Students() {
// hardcoded student list, which will be replaced with data from the database in the future

//initialisation (an obj with new details of a new object like student)


const myGroupID = 13;
const apiURL = 'https://softwarehub.uk/unibase/api';
const myGroupEndpoint =`${apiURL}/users/groups/${myGroupID}`;

//state

const [students, setStudents] = useState(null); //just a variable that keeps track of something if it has updated
const [showForm, setShowForm] = useState(false);

const apiGet = async (endpoint) => { //get function created to fetch data from api will be reuse later
  const response = await fetch(endpoint); //endpoint is a parameter name
  const result = await response.json();
  setStudents(result);
};

//useEffect is used to stop infinite loop in fetching api
useEffect(() => {  
  apiGet(myGroupEndpoint);
}, [myGroupEndpoint]);

//apiGet(myGroupEndpoint); //will fetch myGroupEndpoint variable

//handlers
const handleAdd = () => {setShowForm(true)};
const handleCancel = () => {setShowForm(false)};
//views
    return (
        <>
            <h1>Student List</h1>

            <Spacer>
                { !showForm ? (

                <Action.Tray>
                  <Action.Add showText buttonText='Add a Student' onClick={handleAdd}/>
                </Action.Tray>
                ) : (

                <UserForm onCancel={handleCancel} />

                )}

                {
                  !students
                  ?(
                  <p>Loading Records...</p>
                  ) : (
                  <>
                <CardContainer> {/* was previously div with classname CardContainer, but was changed to CardContainer to use the styling from the CardContainer component, and to wrap the student cards in the container*/}
                  {
                    students.map((student) => <UserCard className="studentCard" key={student.UserID} user={student}/> )}
                    {/*backticks were used to concatenate the first name and last name together, and the substring was used to only show the first 8 characters of the email address*/}
                </CardContainer>
                </>
          )
        }
          </Spacer>
        </>
    );
}

export default Students;