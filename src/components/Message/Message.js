import React from 'react'
import './Message.css'
import { ToastContainer, Toast } from 'react-bootstrap'
import moment from 'moment'

function Message(props) {
  return (
    <ToastContainer
      className={props.messageDistant ? 'distant-toast-container' : 'toast-container'}
      // position='bottom-end'
    >
      <Toast>
        <Toast.Header closeButton={false}>
          {props.messageDistant ? (
            <React.Fragment>
              <img src={props.avatar} className='userImg' alt='Avatar' />
              <strong>{props.name}</strong>
            </React.Fragment>
          ) : null}
          <small>{moment(props.date).format('H:mm')}</small>
        </Toast.Header>
        <Toast.Body>{props.text}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}

export default Message
