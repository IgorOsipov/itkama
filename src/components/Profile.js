import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.profile_cover}>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg" alt="cover" />
            </div>
            <div className={s.avatar}>
                <img src="https://sample-videos.com/img/Sample-jpg-image-500kb.jpg" alt="ava" />
            </div>
            <div>
                mypsots
                <div>
                    new post
                </div>
                <div className='item'>
                    post 1
                </div>
                <div className='item'>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;