import React, {Component} from 'react';
import cls from './Users.module.css';
import * as axios from 'axios';
import userImg from '../../assets/img/user.png'


class Users extends Component{

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => { 
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => { 
                this.props.setUsers(response.data.items)
            })
    }
  
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }
        return (
            <div>
                <div className={cls.pageBar}>
                    {pages.map(p => {
                        return <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage === p && cls.selected }>{p}</span>
                    })}
                </div>
                {this.props.users.map((user) => {
                    return (
                        <div key={user.id} className={cls.wrapper}>
                            <div className={cls.left_wrapper}>
                                <div className={cls.avatar} style={{backgroundImage: `url(${ user.photos.large ? user.photos.large : userImg})`}}></div>
                                {
                                    user.followed 
                                    ? <input type="button" value='unfollow' onClick={() => {this.props.unfollow(user.id)}}/> 
                                    : <input type="button" value='follow' onClick={() => {this.props.follow(user.id)}}/>
                                }
                                
                            </div>
                            <div className={cls.right_wrapper}>
                                <div className={cls.name_status}>
                                    <h2>{user.name}</h2>
                                    <p>{user.status}</p>
                                </div>
                                <div className={cls.location}>
                                    {/* <h2>{"user.location.city + , "}</h2>
                                    <h2>{"user.location.country"}</h2> */}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Users;