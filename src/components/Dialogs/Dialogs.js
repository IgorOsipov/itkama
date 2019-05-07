import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer';

const Dialogs = (props) => {

    let dialogsData = props.dialogsData.dialogs
    let messagesData = props.dialogsData.messages

    let newMessageBody = props.store.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {
                    dialogsData.map(item => <DialogItem name={item.name} />)
                }
            </div>
            <div className={s.messages}>
                {
                    messagesData.map(item => <div><Message message={item.message} /></div>)
                }
                <div>
                    <div className={s.new_message}>
                        <textarea onChange={onNewMessageChange} value={newMessageBody} rows="3"></textarea>
                        <input onClick={onSendMessageClick} type="button" value="Send Message"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs