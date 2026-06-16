import './Modal.scss';

const Modal = ({title, children}) => {
    // initialisation
    //state
    //handler
    //views

    return(
        <div className = 'ModalOverlay'>
            <div className='ModalPane'>
                <header>
                    <p>{title}</p>
                </header>

                <main>
                    {children}
                </main>

            </div>
            <p>this is the background</p>
        </div>
    );

}

export default Modal;