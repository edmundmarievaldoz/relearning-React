import './Modal.scss';
import { useState } from "react";

export const Modal = ({title, children}) => {
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

};

export const useModal = (initialState) => {
    //state...................
    const [isOpen, setIsOpen] = useState(initialState); //form is closed as thid id the state (moved from module)

    //handler.................
    const open = () => setIsOpen(true);

    const close = () => setIsOpen(false);
    //views
    //return

    return [isOpen, open, close];
    
}
