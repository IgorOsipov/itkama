import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsData = props.dialogsData.dialogs
    let messagesData = props.dialogsData.messages

    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {
                    dialogsData.map(item => <DialogItem name={item.name} id={item.id} key={item.id} />)
                }
            </div>
            <div className={s.messages}>
                {
                    messagesData.map(item => <Message message={item.message} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default Dialogs