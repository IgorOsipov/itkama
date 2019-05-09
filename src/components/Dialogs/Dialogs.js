import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e) => {
        let text = e.target.value
        props.onNewMessageChange(text)
    }

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {
                    props.dialogs.map(item => <DialogItem name={item.name} id={item.id}/>)
                }
            </div>
            <div className={s.messages}>
                {
                    props.messages.map(item => <div><Message message={item.message} /></div>)
                }
                <div>
                    <div className={s.new_message}>
                        <textarea onChange={onNewMessageChange} value={props.newMessageBody} rows="3" />
                        <input onClick={onSendMessageClick} type="button" value="Send Message"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs