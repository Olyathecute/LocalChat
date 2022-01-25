import React, { useState } from 'react'
import Input from '../Input/Input'
import Message from '../Message/Message'
import './Layout.css'
import moment from 'moment'

function Layout() {
  const users = {
    2345234: {
      name: 'kek kekkovich',
      avatar: 'https://trikky.ru/wp-content/blogs.dir/1/files/2016/12/Avatar_1481048766783.png'
    }
  }

  const [messages, setMessages] = useState([])

  const addMessage = (text, date) => {
    setMessages((oldState) => [...oldState, { text, date }])
  }

  return (
    <div className='layout'>
      <h2>Local Chat</h2>
      <div className='layoutChat'>
        {messages.map((message, index, array) => {
          let messageDistant = true

          if (
            array[index - 1] &&
            moment(array[index - 1].date)
              .add(5, 's')
              .isAfter(moment(array[index].date))
          ) {
            messageDistant = false
          }
          message.sender = 2345234 // TODO

          return (
            <Message
              key={index}
              name={users[message.sender].name}
              avatar={users[message.sender].avatar}
              text={message.text}
              date={message.date}
              messageDistant={messageDistant}
            />
          )
        })}
        <Input addMessage={addMessage} />
      </div>
    </div>
  )
}

export default Layout
