import React from 'react'
import { Image } from 'react-bootstrap'

const ChatMesage = ({name, message}) => {

  return (
    <div className='d-flex align-items-center my-1'>
        <div className="user-image">
            <Image src='https://yt3.ggpht.com/yti/AOXPAcWiv3tSEIM-Iicc9Ao9Dq-fgf5BUIHJbaQK1xSkwg=s88-c-k-c0x00ffffff-no-rj' width="40px" roundedCircle/>
        </div>
        <div className="user-comment d-flex align-items-center">
            <span className='ms-3 text-secondary text-capitalize' >{name}</span>
            <p className='mb-0 ms-2' style={{fontSize:"0.9rem"}}>{message}</p>
        </div>
    </div>
  )
}

export default ChatMesage