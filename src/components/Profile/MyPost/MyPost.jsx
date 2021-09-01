import React from 'react'
import './MyPost.css'
import Post from './Post/Post'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../validators/validators';
import { Textarea } from '../../common/Preloader/FormsControls/FormsControls';

const maxLength50 = maxLengthCreator(50)

const AddProfileForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={Textarea} name='newPostText'
        placeholder='Введите сообщение' validate={[required, maxLength50]} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({ form: 'profielAddPostForm' })(AddProfileForm)

const MyPost = (props) => {

  let postElement = props.post.map(p => <Post message={p.message} like={p.like} />)

  let addPostProfile = (value) => {
    debugger;
    props.addPost(value.newPostText)
  }

  return <div className='content'>
    <div className='item'>
      <img src='https://images.chesscomfiles.com/uploads/v1/user/14323054.7a1d30c0.1200x1200o.e0cb30ea4d8b.jpeg' />
      <div>
        <AddPostFormRedux onSubmit={addPostProfile} />
      </div>
    </div>
    {postElement}
  </div>
}

export default MyPost;