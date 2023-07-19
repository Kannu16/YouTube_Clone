import React from "react";
import Card from "react-bootstrap/Card";
import { formatDateDifference, formatViews } from "../Utils/Helper";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {

  const myTogglemenu = useSelector(store => store.toggle.isMenuOpen);
  return (
    <>
      <Card
        className="mx-2 my-3"
        style={{ width: myTogglemenu ? "22rem" : "20rem", top: "60px", border: "none" }}
      >
        <Card.Img
          variant="top"
          src={info?.snippet?.thumbnails?.medium?.url}
          style={{ borderRadius: "17px" }}
        />
        <Card.Body className="px-0 py-2">
          <div className="d-flex">
            <div>
            <Image
              id="img"
              draggable="false"
              className="style-scope yt-img-shadow"
              alt="logo"
              width="35"
              height="35"
              roundedCircle 
              src={info?.snippet?.thumbnails?.medium?.url}
            />
            </div>
            <div className="px-3">
            <Card.Text className="yt-tittle fw-bold nav-link" >
              {info?.snippet?.title}
            </Card.Text>
            <Card.Text className="m-0" style={{textDecoration:"none"}}>{info?.snippet?.channelTitle}</Card.Text>
            <Card.Text className="d-flex justify-content-between w-75">
              <span className="text-dark fs-6"  >
                {formatViews(info?.statistics?.viewCount) + "  views"}
              </span>
              <span className="text-dark fs-6" >
                {formatDateDifference(
                  new Date(info?.snippet?.publishedAt)?.toLocaleDateString()
                )}
              </span>
            </Card.Text>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default VideoCard;
