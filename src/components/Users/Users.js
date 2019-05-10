import React from 'react';
import cls from './Users.module.css';



let Users = (props) => {

    if(props.users.length === 0){
        props.setUsers(
            [
                {id: 1, photoUrl: 'https://uznayvse.ru/images/stories2016/uzn_1478038211.jpg', 
                    followed:false, fullName: 'Bill Clinton', status: 'I\'m still the boss', location: {city: 'Washington', country: 'United States'}},
                {id: 2, photoUrl: 'http://stuki-druki.com/aforizms/Paris-Hilton-01.jpg', 
                    followed:true, fullName: 'Paris Hilton', status: 'I\'m hot cheeck', location: {city: 'Paris', country: 'France'}},
                {id: 3, photoUrl: 'https://deita.ru/media/images/NaxyOvCjcr0.2e16d0ba.fill-900x600.jpg', 
                    followed:true, fullName: 'Victor Tsoi', status: 'I\'m alive', location: {city: 'Moscow', country: 'Russia'}},
                {id: 4, photoUrl: 'https://uznayvse.ru/images/stories/uzn_1386534558.jpg', 
                    followed:false, fullName: 'Roven Atkinson', status: 'Mister Bean in the building', location: {city: 'London', country: 'United Kingdom'}},
                {id: 5, photoUrl: 'https://www.cheatsheet.com/wp-content/uploads/2019/05/Kit-Harington-and-Emilia-Clarke-1024x681.jpg', 
                    followed:false, fullName: 'Kit Harrington', status: 'Jon is Targaryen, not Snow', location: {city: 'Winterfell', country: 'Westeros'}},
                {id: 6, photoUrl: 'https://fakty.com.ua/wp-content/uploads/2019/03/04/zel.jpg',
                    followed:false, fullName: 'Volodymyr Zelenskyi', status: 'Hetman, very pleasure', location: {city: 'Kyiv', country: 'Ukraine'}},
                {id: 7, photoUrl: 'https://gdb.voanews.com/D4AB97BD-758E-4878-9257-4D1AE9BEF7C7_cx0_cy7_cw0_w1023_r1_s.jpg', 
                    followed:false, fullName: 'Donald Trump', status: 'America first', location: {city: 'Washington', country: 'United States'}},
                {id: 8, photoUrl: 'https://cdn.bfm.ru/news/maindocumentphoto/2018/03/09/obama.jpg', 
                    followed:false, fullName: 'Barack Obama', status: 'Black boss', location: {city: 'Washington', country: 'United States'}}
            ]
        )
    }        
    return (
        <div>
            {props.users.map((user) => {
                return (
                    <div key={user.id} className={cls.wrapper}>
                        <div className={cls.left_wrapper}>
                            <div className={cls.avatar} style={{backgroundImage: `url(${user.photoUrl})`}}></div>
                            {
                                user.followed 
                                ? <input type="button" value='unfollow' onClick={() => {props.unfollow(user.id)}}/> 
                                : <input type="button" value='follow' onClick={() => {props.follow(user.id)}}/>
                            }
                            
                        </div>
                        <div className={cls.right_wrapper}>
                            <div className={cls.name_status}>
                                <h2>{user.fullName}</h2>
                                <p>{user.status}</p>
                            </div>
                            <div className={cls.location}>
                                <h2>{user.location.city + ", "}</h2>
                                <h2>{user.location.country}</h2>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 

export default Users;