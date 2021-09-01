import React from 'react'
import './Post.css'

const Post = (props) => {
  return <div className='content'>
  
    <div className='item'>
      <img src='https://images.chesscomfiles.com/uploads/v1/user/14323054.7a1d30c0.1200x1200o.e0cb30ea4d8b.jpeg' />
      {props.message}
    </div>
    <div>
      <span>
      {props.like} 
        like
      </span>
    </div>
  </div>
}
export default Post;