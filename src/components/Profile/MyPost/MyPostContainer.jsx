import React from 'react'
import './MyPost.css'
import {actionCreator} from '../../../redux/ProfileReducer'
import MyPost from './MyPost'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    post: state.profilePage.post
  }
}

let mapDispatchToProps = (dispatch) => {
  return {

  addPost: (newPostText) => {
    dispatch (actionCreator(newPostText))
  }
}
}

const MyPostContainer = connect (mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;