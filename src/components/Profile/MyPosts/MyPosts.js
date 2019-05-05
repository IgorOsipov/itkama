import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.my_posts}>
            <h2>myposts</h2>
            <div className={s.new_post}>
                <textarea  id="new_post" cols="30" rows="5"></textarea>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?'/>
                <Post message="It's my first Post"/>
            </div>
        </div>
    );
}

export default MyPosts;