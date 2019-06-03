import React, {Component} from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching } from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import SamServices from '../../services/SamServices'



class UsersConatiner extends Component{

    SamServices = new SamServices()

    componentDidMount(){
        this.props.setIsFetching(true)

        this.SamServices.getUsers(this.props.currentPage,this.props.pageSize)
        .then(users => {
            this.props.setIsFetching(false)
            this.props.setUsers(users.items)
            this.props.setTotalUsersCount(users.totalCount)
        })

    }

    onFollowClick = (userId) => {
        this.props.setIsFetching(true)
        this.SamServices.followUser(userId)
        .then(responce => {
            if(responce.resultCode === 0)
            this.props.follow(userId)
            this.props.setIsFetching(false)
        })
        .catch((e)=>console.log(e))
    }

    onUnfollowClick = (userId) => {
        this.props.setIsFetching(true)
        this.SamServices.unfollowUser(userId)
        .then(responce => {
            if(responce.resultCode === 0)
            this.props.unfollow(userId)
            this.props.setIsFetching(false)
        })
        .catch((e)=>console.log(e))
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        this.SamServices.getUsers(pageNumber, this.props.pageSize)
        .then(users => {
            this.props.setIsFetching(false)
            this.props.setUsers(users.items)
        })
    }
  
    render(){
        
        return (
            <>
                { this.props.isFetching ? <Preloader /> : null}
                <Users 
                    onPageChanged={this.onPageChanged}
                    onFollowClick={this.onFollowClick}
                    onUnfollowClick={this.onUnfollowClick}
                    // totalUsersCount = {this.props.totalUsersCount}
                    // pageSize = {this.props.pageSize}
                    // currentPage = {this.props.currentPage}
                    // users = {this.props.users}
                    // follow = {this.props.follow}
                    // unfollow = {this.props.unfollow}
                    {...this.props}

                />
            </>
        )
    }
}

let mapStateToProps = (state) => ({...state.usersPage})

        


const mapDispatchToProps = {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, setIsFetching        
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersConatiner);