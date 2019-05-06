import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className={s.dialog} >
            <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {

    let dialogsData = [
        {name:'Dima', id:1},
        {name:'Andrey', id:2}, 
        {name:'Sveta', id:3}, 
        {name:'Sasha', id:4},
        {name:'Victor', id:5},
        {name:'Valera', id:6}
    ]

    let messagesData = [
        {message:'Hi', id:1},
        {message:'How are you my nigga?', id:2}, 
        {message:"I'm fine, working on white masters field right now", id:3} 
    ]

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

export default Dialogs;