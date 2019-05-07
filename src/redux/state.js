const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let store = {
    _state: {
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
    },

    _callSubscriber()  {
        console.log('state changed')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action){
        if (action.type === ADD_POST){
            let newPost = {
                id:3,
                message: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        }else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})


export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}


export default store