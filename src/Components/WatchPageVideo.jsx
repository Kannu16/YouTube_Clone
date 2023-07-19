import React from "react";
import { Image } from "react-bootstrap";
import { formatDateDifference, formatViews } from "../Utils/Helper";

const WatchPageVideo = ({info}) => {
 
  return (
    <>
       <div className="d-flex">
            <div className="watchpage-left-image p-2">
              <Image
                alt="ada"
                height="120"
                width="170"
                src={info?.snippet?.thumbnails?.medium?.url}
                rounded
              />
            </div>
            <div className="watchpage-right-image p-2">
              <p className="text fs-6 mb-0 fw-semibold">
              {info?.snippet?.title}
              </p>

              <span style={{ fontSize: "14px" }}>{info?.snippet?.channelTitle}</span>
              <div className="watchpage-views-uploaded-time w-75 d-flex justify-content-between">
                <span style={{ fontSize: "14px" }}>{formatViews(info?.statistics?.viewCount) + "  views"}</span>
                <span style={{ fontSize: "14px" }}>{formatDateDifference(new Date(info?.snippet?.publishedAt)?.toLocaleDateString())}</span>
              </div>
            </div>
          </div>

    </>
  );
};

export default WatchPageVideo;
