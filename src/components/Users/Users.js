import React from 'react';
import cls from './Users.module.css';
import * as axios from 'axios';
import userImg from '../../assets/img/user.png'



let Users = (props) => {

    if(props.users.length === 0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => { 
            props.setUsers(response.data.items)
            
        })
    }        
    return (
        <div>
            {props.users.map((user) => {
                return (
                    <div key={user.id} className={cls.wrapper}>
                        <div className={cls.left_wrapper}>
                            <div className={cls.avatar} style={{backgroundImage: `url(${ user.photos.small ? user.photos.small : userImg})`}}></div>
                            {
                                user.followed 
                                ? <input type="button" value='unfollow' onClick={() => {props.unfollow(user.id)}}/> 
                                : <input type="button" value='follow' onClick={() => {props.follow(user.id)}}/>
                            }
                            
                        </div>
                        <div className={cls.right_wrapper}>
                            <div className={cls.name_status}>
                                <h2>{user.name}</h2>
                                <p>{user.status}</p>
                            </div>
                            <div className={cls.location}>
                                <h2>{"user.location.city + , "}</h2>
                                <h2>{"user.location.country"}</h2>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 

export default Users;