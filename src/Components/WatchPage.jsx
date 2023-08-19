import React, { useEffect, useState } from "react";
import WatchPageVideo from "./WatchPageVideo";
import { Link, useSearchParams } from "react-router-dom";
import { fetchData } from "../Utils/Helper";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";


const WatchPage = () => {
  const [searchparams] = useSearchParams();
  const videoId = searchparams.get("v");
  const [video, setVideo] = useState([]);


  useEffect(()=>{
   fetchData(setVideo)
  },[])
  return (
    <>
      <div className="watchpage-parent-container d-flex justify-content-between">
        <div className="div-left" style={{ width: "65%" }} id="WatchPage">
          <iframe
            width="890"
            height="450"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <CommentsContainer />
        </div>
        <div className="div-right " style={{ width: "33%" }}>
        <div className="liveChat">
            <LiveChat />
        </div>

          {
            video.map((items)=> <Link key={items.id} className="nav-link" to={"?v=" + items.id}> <WatchPageVideo info={items} /> </Link>)
          }
        </div>
      </div>

    </>
  );
};

export default WatchPage;
