import SamServices from '../services/SamServices';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SETUSERS = 'SETUSERS'
const SETCURRENTPAGE = 'SETCURRENTPAGE'
const SETTOTALCOUNT = 'SETTOTALCOUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const SamurajsServices = new SamServices();

const initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userId) {
                        return { ...item, followed: true }
                    }
                    return item;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((item) => {
                    if (item.id === action.userId) {
                        return { ...item, followed: false }
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
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, 
                followingInProgress: action.isFollowingProgress 
                ? [...state.followingInProgress, action.userId] 
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId) => {
    return { type: FOLLOW, userId }
}
export const unfollowSuccess = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => {
    return { type: SETUSERS, users }
}
export const setCurrentPage = (currentPage) => {
    return { type: SETCURRENTPAGE, currentPage }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return { type: SETTOTALCOUNT, totalUsersCount }
}
export const setIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleFollowingProgress = (isFollowingProgress, userId) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowingProgress, userId }
}

export const getUsers = (currentPage, pageSize) => (dispatch) => {
    
    dispatch(setIsFetching(true))

    SamurajsServices.getUsers(currentPage, pageSize)
        .then(users => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(users.items))
            dispatch(setTotalUsersCount(users.totalCount))
            dispatch(setCurrentPage(currentPage))
    })

}

export const follow = (userId) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    SamurajsServices.followUser(userId)
        .then(responce => {
            if (responce.resultCode === 0) {
                dispatch(followSuccess(userId));

                dispatch(toggleFollowingProgress(false, userId))
            } else if (responce.resultCode === 1) {
                console.log(responce.messages[0])
                dispatch(setIsFetching(false))
                dispatch(toggleFollowingProgress(false, userId))
            }
        })
        .catch((e) => console.log(e))

    }

export const unfollow = (userId) => (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        SamurajsServices.unfollowUser(userId)
            .then(responce => {
                if (responce.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
    
                    dispatch(toggleFollowingProgress(false, userId))
                } else if (responce.resultCode === 1) {
                    console.log(responce.messages[0])
                    dispatch(setIsFetching(false))
                    dispatch(toggleFollowingProgress(false, userId))
                }
            })
            .catch((e) => console.log(e))
    }


export default usersReducer