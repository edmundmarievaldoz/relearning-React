import { useState } from 'react';
import { Modal, useModal } from './Modal.jsx';
import Spacer from './Spacer.jsx';
import Action from './Actions.jsx';
import './Alert.scss';

export const Alert = ({message, onDismiss}) => {
    //initialisation
    //state
    //handler
    
    return (
        <Modal title='Alert' headerColor='DodgerBlue'>
            <Spacer>
                <p className='alertMessage'>{message}</p>
                <Action.Tray>
                    <Action.Dismiss showText onClick={onDismiss}/> {/*TBC bc girlfriend told me to get off my laptop and get a life :P */}
                </Action.Tray>
            </Spacer>
        </Modal>
    );
}

export const ErrorAlert = ({message, onDismiss}) => {
    //initialisation
    //state
    //handler
    
    return (
        <Modal title='Error' headerColor='Red'>
            <Spacer>
                <p className='alertMessage'>{message}</p>
                <Action.Tray>
                    <Action.Dismiss showText onClick={onDismiss}/> {/*TBC bc girlfriend told me to get off my laptop and get a life :P */}
                </Action.Tray>
            </Spacer>
        </Modal>
    );
}

export const ConfirmAlert = ({message, onConfirm, onDismiss}) => {
    //initialisation
    //state
    //handler

    const handleConfirm = () => {
        onConfirm();
        onDismiss();
    };
    
    return (
        <Modal title='Confirmation Needed' headerColor='Limegreen'>
            <Spacer>
                <p className='alertMessage'>{message}</p>
                <Action.Tray>
                    <Action.Yes showText onClick={handleConfirm}/> {/*TBC bc girlfriend told me to get off my laptop and get a life :P */}
                    <Action.Dismiss showText onClick={onDismiss}/>
                </Action.Tray>
            </Spacer>
        </Modal>
    );
};

export const useAlert = () => {
    //state...................
    const [isOpen, openModal, close] = useModal(false); //form is closed as thid id the state (moved from module)
    const [message, setMessage] = useState(null);

    //handler.................
    const open = (message) => {
        setMessage(message);
        openModal();
    };

    //views
    //return

    return [isOpen, message, open, close];
    
}

