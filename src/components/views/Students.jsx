import { useState, useEffect } from 'react';
import './Students.scss';
import {CardContainer, Card} from "../UI/Card.jsx";

function Students() {
// hardcoded student list, which will be replaced with data from the database in the future

//initialisation (an obj with new details of a new object like student)

const newStudent = {
      UserID: 275,
      UserFirstname: 'Sholeh',
      UserLastname: 'ABBAS',
      UserEmail: 'K2955214@kingston.ac.uk',
      UserRegistered: 0,
      UserLevel: 4,
      UserYearID: 1,
      UserUsertypeID: 2,
      UserImageURL:
        'https://images.generated.photos/evdpMs0ZUOoMA0ACfCy98zzmy347YQxRmrPCWHp3v0g/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MzUzMTEyLmpwZw.jpg',
      UserUsertypeName: 'Student',
      UserYearName: '2022-23',
    };

const myGroupID = 13;
const apiURL = 'https://softwarehub.uk/unibase/api';
const myGroupEndpoint =`${apiURL}/users/groups/${myGroupID}`;

//state

const [students, setStudents] = useState(null); //just a variable that keeps track of something if it has updated

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
  function handleAdd(student) {
    student.UserID = Math.floor(10000 * Math.random());
    setStudents([...students, newStudent]); //the new array is form from the contents of the old array

    // and tagged on the end of it are the new student
  }

//views
    return (
        <>
        <h1>Student List</h1>

        {
          !students
          ?(
          <p>Loading Records...</p>
          ) : (
          <>
        <CardContainer> {/* was previously div with classname CardContainer, but was changed to CardContainer to use the styling from the CardContainer component, and to wrap the student cards in the container*/}
          {
            students.map((student) => {
              return(
                <div className="studentCard" key={student.UserID}>

                  <Card> {/*was previously a div with classname Card, but was changed to Card to use the styling from the Card component*/}
                    <p>{student.UserEmail.substring(0,8)}</p>
                    <p>{`${student.UserFirstname} ${student.UserLastname}`}</p>
                    <img src={student.UserImageURL}/>
                  </Card>

                </div>
              )
            }) //backticks were used to concatenate the first name and last name together, and the substring was used to only show the first 8 characters of the email address
          }
        </CardContainer>
        <button onClick={() => handleAdd(newStudent)}>Add a New Student</button>
        </>
      )
    }
        </>
    );
}

export default Students;