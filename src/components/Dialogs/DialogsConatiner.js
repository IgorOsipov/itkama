import React from 'react'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    
    let store = props.store.getState();
     
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text))
    }

    return(
        <Dialogs 
            onSendMessageClick={onSendMessageClick} 
            onNewMessageChange={onNewMessageChange}
            dialogs={store.dialogsPage.dialogs}
            messages={store.dialogsPage.messages}
            newMessageBody={store.dialogsPage.newMessageBody}
            />
    )
}

export default DialogsContainer