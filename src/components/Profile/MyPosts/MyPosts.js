import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            myposts
            <div className={s.new_post}>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button>Add Post</button>
            </div>
            <Post />
        </div>
    );
}

export default MyPosts;