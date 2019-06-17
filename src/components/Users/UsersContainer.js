import React, {Component} from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import SamServices from '../../services/SamServices';



class UsersConatiner extends Component{

    SamServices = new SamServices()

    componentDidMount(){
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onFollowClick = (userId) => {
        this.props.follow(userId)
    }

    onUnfollowClick = (userId) => {
        this.props.unfollow(userId)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);  
    }
  
    render(){
        
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null}
                <Users 
                    onPageChanged={this.onPageChanged}
                    onFollowClick={this.onFollowClick}
                    onUnfollowClick={this.onUnfollowClick}
                    {...this.props}

                />
            </>
        )
    }
}

let mapStateToProps = (state) => ({...state.usersPage})

const mapDispatchToProps = {
    follow, unfollow, getUsers        
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersConatiner);