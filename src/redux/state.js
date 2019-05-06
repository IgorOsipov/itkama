import { rerenderEntireTree } from "../render";

let state = {
    profilePage:{
        posts: [
            {message:'Hi, how are you?', id:1},
            {message:"It's my first Post", id:2}
        ],
        newPostText: ''
    },

    dialogsPage:{
        messages: [
            {message:'Hi', id:1},
            {message:'How are you my nigga?', id:2}, 
            {message:"I'm fine, working on white masters field right now", id:3} 
        ],
        dialogs: [
            {name:'Dima', id:1},
            {name:'Andrey', id:2}, 
            {name:'Sveta', id:3}, 
            {name:'Sasha', id:4},
            {name:'Victor', id:5},
            {name:'Valera', id:6}
        ]
    }
    
}

export let addPost = () => {
    let newPost = {
        id:3,
        message: state.profilePage.newPostText
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state