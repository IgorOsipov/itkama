import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.dialog} >
                    <NavLink activeClassName={s.active} to='/dialogs/1'>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/3'>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/4'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/5'>Victor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to='/dialogs/6'>Valera</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;