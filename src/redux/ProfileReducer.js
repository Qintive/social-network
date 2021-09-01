import { profileAPI, userAPI } from "../api/api";
import avaReact from '../assets/ava_react.jpg'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO_PROFILE = 'SET_PHOTO_PROFILE'


let initialState = {
    post: [
        { message: 'HI MY NAME IS DANIEL', like: '15' },
        { message: 'This is my social network', like: '55' },
        { message: 'I a, crazy', like: '189' },
    ],
    status: '',
    image: avaReact
};

const ProfileReduce = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 0
            }
            let copyState = { ...state };
            copyState.post = [...state.post];
            copyState.post.push(newPost);
            return copyState;
            
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_PHOTO_PROFILE: {
            return { ...state, image: action.image }
        }
        default:
            return state;

    }
}

export const actionCreator = (newPostText) => {
    return {
        type: 'ADD_POST',
        newPostText
    }
}
export const updateNewPostCreator = (text) => {
    return {
        type: 'UPDATE_NEW_POST_TEXT',
        newText: text
    }
}
export const setPhotoProfile = (image) => {
    return {
        type: 'SET_PHOTO_PROFILE',
        image: image
    }
}
export const setUsersProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    }
}

export const setStatus = (status) => {
    return {
        type: 'SET_STATUS',
        status
    }
}

export const getProfile = (userId) => {
    return async (dispatch) => {

        let response = await userAPI.getProfile(userId)
                dispatch(setUsersProfile(response.data))
    }
}

export const getStatus = (userId) => {
    return async (dispatch) => {

        let response = await profileAPI.getStatus(userId)
                dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {

       let response = await profileAPI.putStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
    }
}
export const putPhoto = (image) => {
    return async (dispatch) => {

  let response = await  profileAPI.putPhoto(image)
  if (response.data.resultCode === 0) {
    dispatch(setPhotoProfile(image))
}
}
}

export default ProfileReduce;