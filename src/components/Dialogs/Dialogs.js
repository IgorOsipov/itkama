import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let dp = props.dialogsPage
    
    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.updateMessage(text)
    }

    if(!props.isAuth) return <Redirect to='/login' />

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {
                    dp.dialogs.map(item => <DialogItem name={item.name} key={item.id} id={item.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    dp.messages.map(item => <Message  key={item.id} message={item.message} />)
                }
                <div>
                    <div className={s.new_message}>
                        <textarea onChange={onNewMessageChange} value={dp.newMessageBody} rows="3" />
                        <input onClick={onSendMessageClick} type="button" value="Send Message"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs