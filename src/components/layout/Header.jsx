import "./Header.scss";

function Header(props) {

    return (
        <header>
            <h1>Basic React Demo</h1>
            <p className ="welcome"> Welcome {props.userName}!</p>
        </header>
    );

}

export default Header;

//props have been passed in from the parent component 
// (App.jsx) and can be used in this child component (Header.jsx) 
// to display the logged in user's name.