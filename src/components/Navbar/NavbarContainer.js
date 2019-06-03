import React, { Component } from 'react';
import Navbar from './Navbar';
import SamServices from '../../services/SamServices';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/authReducer';


class NavbarContainer extends Component{
    SamServices = new SamServices()

    componentDidMount(){
        this.SamServices.authorization()
        .then(responce => {
            if(responce.resultCode === 0) {
                this.props.setUserData(responce.data.id, responce.data.email, responce.data.login)
            }
        })
    }

    

    render(){
        return(
            <Navbar {...this.props}/>
        )
    }
}

const mapStateToProps = (state) =>({...state.auth})

const mapDispatchToProps = {
    setUserData
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)