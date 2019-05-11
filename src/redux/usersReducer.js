const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'

let initialState = {
    users: [
        
    ]
}

const usersReducer = (state = initialState, action) => {
    
    switch(action.type){
        case FOLLOW: 
            return {
                ...state, 
                users: state.users.map((item)=>{
                    if(item.id === action.userId){
                        return {...item, followed: true}
                    }
                    return item;
                })
            }
        case UNFOLLOW: 
            return {
                ...state, 
                users: state.users.map((item)=>{
                    if(item.id === action.userId){
                        return {...item, followed: false}
                    }
                    return item;
                })
            }
        case SETUSERS:
            return {
                ...state,
                users: [...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId) => {
    return {type: FOLLOW, userId}
}
export const unfollowAC = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsersAC = (users) => {
    return {type: SETUSERS, users}
}

export default usersReducer