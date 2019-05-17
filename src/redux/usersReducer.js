const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETCURRENTPAGE = 'SETCURRENTPAGE'
const SETTOTALCOUNT = 'SETTOTALCOUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        case TOGGLE_IS_FETCHING:
            return{
                ...state, isFetching: action.isFetching
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
export const setIsFetchingAC = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching}
}

export default usersReducer