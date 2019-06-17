import React, { Component } from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';
import { setUserData } from '../../redux/authReducer';



class NavbarContainer extends Component{
    

    componentDidMount(){
        this.props.setUserData();
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