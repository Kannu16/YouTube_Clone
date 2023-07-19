import React from "react";
import { Link } from "react-router-dom";

const NoInternet = () => {
  return (
    <>
     <div className="offline-container">
     <div
        className="wrapper my-5"

      >
        <h1 className="">OFFLINE</h1>
        <h4 className="mt-4">Please check your internet connection</h4>
        <Link to="/" className="button">
          RETRY
        </Link>
      </div>
     </div>
    </>
  );
};

export default NoInternet;
