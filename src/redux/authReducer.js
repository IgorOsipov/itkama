import AuthServices from '../services/AuthServices';
const SET_AUTH_DATA= 'SET_AUTH_DATA';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_AUTH_DATA:{
            return  {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
    
        default:
            return state

    }
}

export const setUserDataSuccess = (userId, email, login) => {
    const data = {userId, email, login}
    return {
        type: SET_AUTH_DATA, 
        data
    }
}

export const setUserData = () => {
    const auth = new AuthServices()
    return (dispatch) => {
        auth.authorization()
        .then(responce => {
            if(responce.resultCode === 0) {
                dispatch(setUserDataSuccess(responce.data.id, responce.data.email, responce.data.login));
            }
        })
    }
}


export default authReducer