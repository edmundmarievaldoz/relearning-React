import './Card.scss';


export function CardContainter (props) {
    return (
        <div className="container">
            { props.children }
        </div>
    );
}

export function Card (props) {
    return (
        <div className="card">
            { props.children }
        </div>
    );
}