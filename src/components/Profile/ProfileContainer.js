import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile, setUserProfileSuccess } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';





class ProfileContainer extends React.Component {
    
    

    componentDidMount(){ 
        const id = this.props.match.params.id ? this.props.match.params.id : '2'
        this.props.setUserProfile(id)
    }

    componentWillUnmount(){
        this.props.setUserProfileSuccess(null)
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
    setUserProfile,
    setUserProfileSuccess
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(ProfileContainer)))