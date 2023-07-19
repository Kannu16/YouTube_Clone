import React from "react";
import { useSelector } from "react-redux";

export const Loader = () => {
  const myTogglemenu = useSelector((store) => store.toggle.isMenuOpen);
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 233, 11, 22, 43, 145,345,34213,24];

  return (
    <>
      <div
        className="d-flex flex-wrap"
        style={{ width: myTogglemenu ? "81%" : "94%" }}
      >
        {arr.map((e, f) => {
          return (   
              <div key={e} className="my-3">
                <div
                  className="card mb-2 mx-2"
                  style={{
                    width: myTogglemenu ? "22rem" : "20rem",
                    top: "60px",
                    border: "none",
                    height: "12rem",
                    backgroundColor: "#bbb",
                    borderRadius: "17px",
                  }}
                ></div>
                <div className="d-flex justify-content-between" style={{width:"95%", margin:"auto"}}>
                   <div className="left"
                   style={{backgroundColor: "#bbb", borderRadius:"50%", height:"50px", width:"50px",  marginTop:"65px"}}
                   
                   ></div>
                   <div className="right" style={{backgroundColor: "#bbb", borderRadius:"10px", height:myTogglemenu ? "70px" : "50px", width:"84%", marginTop:"65px"}}></div>
                </div>
              </div>
          );
        })}
      </div>
    </>
  );
};
