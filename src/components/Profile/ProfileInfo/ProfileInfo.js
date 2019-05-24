import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { Wrapper, AvatarContainer, InfoContainer } from './ProfileInfoStyled';
import userPng from '../../../assets/img/user.png'

const ProfileInfo = ({ profile }) => {
    if (!profile) {
        return <Preloader />
    }
    return (

        <Wrapper>
            <AvatarContainer photo={profile.photos.large ? profile.photos.large : userPng}/>
            <InfoContainer>
                <h3>{profile.fullName}</h3>
                <p>{profile.aboutMe}</p>
            </InfoContainer>
        </Wrapper>

    )
}


export default ProfileInfo;
