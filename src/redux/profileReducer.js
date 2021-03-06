import SamServices from '../services/SamServices';

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const services = new SamServices()

let initialState = {
    posts: [
        {message:'Hi, how are you?', id:1},
        {message:"It's my first Post", id:2}
    ],
    newPostText:'',
    profile: null
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
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
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

export const setUserProfileSuccess = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setUserProfile = (id) => (dispatch) =>{
    services.getUserProfile(id)
        .then(data => dispatch(setUserProfileSuccess(data)))
}


export default profileReducer;