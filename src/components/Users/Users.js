import React from 'react';
import cls from './Users.module.css';
import userImg from '../../assets/img/user.png';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return (
        <div>
            <div className={cls.pageBar}>
                {pages.map(p => {
                    return <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && cls.selected}>{p}</span>
                })}
            </div>
            {props.users.map((user) => {
                return (
                    <div key={user.id} className={cls.wrapper}>
                        <div className={cls.left_wrapper}>
                            <div className={cls.avatar} style={{ backgroundImage: `url(${user.photos.large ? user.photos.large : userImg})` }}></div>
                            {
                                user.followed
                                    ? <input type="button" value='unfollow' onClick={() => { props.unfollow(user.id) }} />
                                    : <input type="button" value='follow' onClick={() => { props.follow(user.id) }} />
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

export default Users;