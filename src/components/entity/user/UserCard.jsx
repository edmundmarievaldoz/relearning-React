import './UserCard.scss';
import { Card } from '../../UI/Card';

function UserCard ( {user} ) {
    //initialisation
    //state
    //handlers
    //view
    return (
        <div className="userCard">

            <Card> {/*was previously a div with classname Card, but was changed to Card to use the styling from the Card component*/}
            <p>{user.UserEmail.substring(0,8)}</p>
            <p>{`${user.UserFirstname} ${user.UserLastname}`}</p>
            <img src={user.UserImageURL}/>
            </Card>

        </div>

    );
}

export default UserCard;