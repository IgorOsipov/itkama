import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={s.container}>
            <div className={s.profile_cover}>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" alt="cover" />
            </div>
            <div className={s.avatar}>
                <img src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" alt="ava" />
            </div>
            <div className={s.info}>
                <h3>Василий Пупкин</h3>
                <h3>27 лет</h3>
            </div>
        </div>
    )
}


export default ProfileInfo;
