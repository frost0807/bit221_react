import React from 'react'
import Avatar from './Avatar'
import DTime from './DTime'

function Comment(props) {
  return (
    <div className="comment">
      <div className="user-info container">
        <Avatar url={props.avatarUrl}/>
        <div className="user-info-name container">
          {props.name}
        </div>
      </div>
      <div className="comment-txt container">
        <p>
          {props.comment}
        </p>
        <div className="comment-date">
          <DTime />
        </div>
      </div>
    </div>
  )
}

export default Comment