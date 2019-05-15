const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETCURRENTPAGE = 'SETCURRENTPAGE'
const SETTOTALCOUNT = 'SETTOTALCOUNT'

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1
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
        case SETCURRENTPAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SETTOTALCOUNT: 
            return{
                ...state, totalUsersCount: action.totalUsersCount
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
export const setCurrentPageAC = (currentPage) => {
    return {type:SETCURRENTPAGE, currentPage}
}
export const setTotalUsersCountAC = (totalUsersCount) =>{
    return { type: SETTOTALCOUNT, totalUsersCount}
}

export default usersReducer