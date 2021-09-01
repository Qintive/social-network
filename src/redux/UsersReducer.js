import {userAPI} from '../api/api'


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 10,
    totalItemsCount: 20,
    currentPage: 2,
    isFetching: true,
    folowingInProgress: [] 
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                // uders: [...state.users]
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }

        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USER_COUNT: {
            return { ...state, totalItemsCount: action.count }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
            folowingInProgress: action.isFetching
            ? [ ...state.folowingInProgress, action.userId]
            : state.folowingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: 'FOLLOW', userId
    }
}

/*AC - action creator*/

export const unfollowSuccess = (userId) => {
    return {
        type: 'UNFOLLOW', userId
    }
}

export const setUsers = (users) => {
    return {
        type: 'SET_USERS', users
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: 'SET_CURRENT_PAGE', currentPage
    }
}

export const setTotalUserCount = (totalItemsCount) => {
    return {
        type: 'SET_TOTAL_USER_COUNT', count: totalItemsCount
    }
}

export const toggleIsFetching = (isFetching) => {
    return {
        type: 'TOGGLE_IS_FETCHING', isFetching
    }
}
export const toggleIsFollowingProgress = (isFetching, userId) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId
    }
}
export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    
        dispatch(toggleIsFetching(false))
        dispatch(setCurrentPage(currentPage))

        userAPI.getUsers(currentPage, pageSize).then(data => {

            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
    })
}
}

export const follow = (userId) => {
    return (dispatch) => {
    
        dispatch(toggleIsFollowingProgress(true, userId))

        userAPI.follow(userId)

            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId))
                }

                dispatch(toggleIsFollowingProgress(false, userId))

    })
}
}

export const unfollow = (userId) => {
    return (dispatch) => {
    
        dispatch(toggleIsFollowingProgress(true, userId))

        userAPI.unfollow(userId)

            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId))
                }

                dispatch(toggleIsFollowingProgress(false, userId))

    })
}
}

export default usersReducer;