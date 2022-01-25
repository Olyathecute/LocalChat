import React, { useState } from 'react'
import { FormControl, InputGroup, Button } from 'react-bootstrap'

function Input({ addMessage }) {
  const [text, setMessage] = useState('')
  const [btnActive, setBtnActive] = useState(false)

  const bthClick = () => {
    let date = Date.now()
    addMessage(text, date)
    setMessage('')
    setBtnActive(false)
  }

  return (
    <InputGroup className='inputGroup'>
      <FormControl
        as='textarea'
        rows='1'
        placeholder='Enter your message...'
        value={text}
        onChange={(event) => {
          setMessage(event.target.value)
          setBtnActive(event.target.value.length > 0)
        }}
      />
      <Button onClick={bthClick} id='buttonSend' disabled={!btnActive}>
        Send
      </Button>
    </InputGroup>
  )
}

export default Input
