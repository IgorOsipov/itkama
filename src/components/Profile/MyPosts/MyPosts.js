import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'




const MyPosts = (props) => {

    let postsData = props.posts
    let newPostText = props.newPostText


    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
        
    }

    return (
        <div className={s.my_posts}>
            <h2>myposts</h2>
            <div className={s.new_post}>
                <textarea onChange={onPostChange} rows='3' value={newPostText} />
                <input onClick={onAddPost} type="button" value="Add Post" />
            </div>
            <div className={s.posts}>
                {
                    postsData.map(item => <Post message={item.message} key={item.id} />)
                }
            </div>
        </div>
    )
}

export default MyPosts