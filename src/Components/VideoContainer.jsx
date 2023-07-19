import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { useSelector } from 'react-redux';
import { fetchData } from '../Utils/Helper';
import { Link } from 'react-router-dom';
import { Loader } from "./Shimmer";
import useOnline from "../Utils/useOnlineCheck";
import NoInternet from './NoInternet';

const VideoContainer = () => {
  const isOnline = useOnline()

    const [video, setVideo] = useState([]);
    const myTogglemenu = useSelector(store => store.toggle.isMenuOpen);

     useEffect(()=>{
      fetchData(setVideo)
    }, [])

    if(video.length === 0) return <Loader />
    if(!isOnline) return <NoInternet />
 
 
  return (
    <>
      <div className='d-flex flex-wrap z-3' style={{width: myTogglemenu ? "81%" : "94%"}}>
         {video.map((items)=>{
          return(
            <Link className='nav-link' key={items.id} to={"watch?v="+ items.id}> <VideoCard key={items.id} info={items}/></Link>
          )
         })}
      </div>
    </>
  )
}

export default VideoContainer;