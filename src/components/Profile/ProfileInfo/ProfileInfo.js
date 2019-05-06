import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={s.container}>
            <div className={s.profile_cover}>
            </div>
            <div className={s.avatar}>        
            </div>
            <div className={s.info}>
                <h3>Василий Пупкин</h3>
                <h3>27 лет</h3>
            </div>
        </div>
    )
}


export default ProfileInfo;
