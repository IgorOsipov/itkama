import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = props.profilePage.posts
    let newPostText = props.profilePage.newPostText
    let newPostElement = React.createRef()
    

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value 
        props.updateNewPostText(text)
    }

    return (
        <div className={s.my_posts}>
            <h2>myposts</h2>
            <div className={s.new_post}>
                <textarea  onChange = {onPostChange} ref={newPostElement} rows='3' value={newPostText}  />
                <input onClick = { addPost } type="button" value="Add Post"/>
            </div>
            <div className={s.posts}>
                {
                    postsData.map(item => <Post message={item.message} key={item.id}/>)
                }
            </div>
        </div>
    );
}

export default MyPosts