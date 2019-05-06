import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText} profilePage={props.profilePage}/>
        </div>
    );
}

export default Profile;