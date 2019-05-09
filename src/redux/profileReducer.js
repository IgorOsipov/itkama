const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {message:'Hi, how are you?', id:1},
        {message:"It's my first Post", id:2}
    ],
    newPostText:''
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST:{
            let newPost = {
                id:3,
                message: state.newPostText
            }
            return {
                ...state,
                newPostText: '',
                posts: [
                    ...state.posts, 
                    newPost
                ]
            }
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})


export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;