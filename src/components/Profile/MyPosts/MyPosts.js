import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = props.postsData;

    return (
        <div className={s.my_posts}>
            <h2>myposts</h2>
            <div className={s.new_post}>
                <textarea  id="new_post" rows='3'></textarea>
                <input type="button" value="Add Post"/>
            </div>
            <div className={s.posts}>
                {
                    postsData.map(item => <Post message={item.message} key={item.id}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts;