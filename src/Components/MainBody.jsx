import React from 'react'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer';
import ButtonList from './ButtonList';

const MainBody = () => {
  

  return (
    <>
      <div className='d-flex justify-content-between' style={{marginTop:"3%"}}>
        <SideBar />
        <VideoContainer />
        <ButtonList />
      </div>
    </>
  )
}

export default MainBody;