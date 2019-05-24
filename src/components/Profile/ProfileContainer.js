import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {
    
    componentDidMount(){
        let userId = this.props.match.params.id;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId ? userId : '2' }`).then(({data}) => {
            this.props.setUserProfile(data);
        })
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

const mapDispatchToProps = {
    setUserProfile
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainerComponent)