import React, {Component} from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching } from '../../redux/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import SamServices from '../../services/SamServices'



class UsersConatiner extends Component{

    SamServices = new SamServices

    componentDidMount(){
        this.props.setIsFetching(true)

        this.SamServices.getUsers(this.props.currentPage,this.props.pageSize)
        .then(users => {
            this.props.setIsFetching(false)
            this.props.setUsers(users.items)
            this.props.setTotalUsersCount(users.totalCount)
        })

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
                    totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    users = {this.props.users}
                    follow = {this.props.follow}
                    unfollow = {this.props.unfollow}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, setIsFetching        
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersConatiner);