import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = ({profile, match}) => {

    return (
        <>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </>
    );
}

export default Profile;