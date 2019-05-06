import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {message:'Hi, how are you?', id:1},
        {message:"It's my first Post", id:2}
    ]

    return (
        <div className={s.my_posts}>
            <h2>myposts</h2>
            <div className={s.new_post}>
                <textarea  id="new_post" cols="30" rows="5"></textarea>
                <button>Add Post</button>
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