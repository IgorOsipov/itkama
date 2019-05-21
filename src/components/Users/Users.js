import React from 'react';
import userImg from '../../assets/img/user.png';
import { PageBar, PageBarSpan, Wrapper, LeftWrapper, Avatar, RightWrapper} from './UsersStyles';




const Users = (props) => {
   

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return (
        <div>
            <PageBar>
                {pages.map(p => {
                    return <PageBarSpan key={p} onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p && 'selected'} >{p}</PageBarSpan>
                })}
            </PageBar>
            {props.users.map((user) => {
                return (
                    <Wrapper key={user.id}>
                        <LeftWrapper>
                            <Avatar ava={user.photos.large ? user.photos.large : userImg}></Avatar>
                            {
                                user.followed
                                    ? <input type="button" value='unfollow' onClick={() => { props.unfollow(user.id) }} />
                                    : <input type="button" value='follow' onClick={() => { props.follow(user.id) }} />
                            }

                        </LeftWrapper>
                        <RightWrapper>
                            <div className='name_status'>
                                <h2>{user.name}</h2>
                                <p>{user.status}</p>
                            </div>
                        </RightWrapper>
                    </Wrapper>
                )
            })}
        </div>
    )
}

export default Users;