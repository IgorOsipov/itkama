import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import SamServices from '../../services/SamServices';



class ProfileContainer extends React.Component {
    SamServices = new SamServices()
    

    componentDidMount(){ 
        const id = this.props.match.params.id ? this.props.match.params.id : '2'
        this.SamServices.getUserProfile(id)
        .then(data => this.props.setUserProfile(data))
    }

    componentWillUnmount(){
        this.props.setUserProfile(null)
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const mapDispatchToProps = {
    setUserProfile
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer))