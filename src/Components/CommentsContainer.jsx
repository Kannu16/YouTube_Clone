import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../Utils/Addcomment";

const CommentBox = ({ data }) => {
  const { name, comment } = data;

  return (
    <>
      <div className="comentsConatiner mb-2 d-flex justify-content-between">
        <div className="commentscontainer-left">
          <Image
            roundedCircle
            id="img"
            draggable="false"
            className="style-scope yt-img-shadow"
            alt="Kunal Nath"
            width="40"
            height="40"
            src="https://yt3.ggpht.com/yti/AOXPAcWiv3tSEIM-Iicc9Ao9Dq-fgf5BUIHJbaQK1xSkwg=s88-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="commentscontainer-right" style={{ width: "93%" }}>
          <span className="fw-semibold">{name}</span>
          <p> {comment} </p>
        </div>
      </div>
    </>
  );
};

const CommentList = ({ data }) => {
  return data.map((items, index) => (
      <div key={items.id}>
        <CommentBox key={items.id} data={items} />
        <div className="commentreplieslist my-2">    
          <CommentList key={items.id} data={items.replies} />
        </div>
      </div>
  ));
};

const CommentsContainer = () => {
  const [commentext, setcommenttext] = useState("");
  const addmyComment = useSelector((store) => store.comment.commentsArray);
  const dispatchEvent = useDispatch();

  return (
    <>
      <div className="my-2">
        <h3 className="text fs-5 fw-semibold"> {addmyComment.length} comments</h3>
        <form
          className=""
          onSubmit={(e) => {
            e.preventDefault();
            dispatchEvent(
              addComment({
                name: "Kanuj Nath",
                comment: commentext,
                replies: [],
              })
            );
            setcommenttext("");
          }}
        >
          <div className="user-comment-box d-flex justify-content-between mb-5">
            <Image
              roundedCircle
              id="img"
              draggable="false"
              className="style-scope yt-img-shadow"
              alt="Kunal Nath"
              width="40"
              height="40"
              src="https://yt3.ggpht.com/yti/AOXPAcWiv3tSEIM-Iicc9Ao9Dq-fgf5BUIHJbaQK1xSkwg=s88-c-k-c0x00ffffff-no-rj"
            />
            <input
              className="form-control shadow-none"
              placeholder="Add a comment"
              style={{ width: "93%" }}
              value={commentext}
              onChange={(e) => setcommenttext(e.target.value)}
              id="addcomment"
              autoComplete="off"
            />
          </div>
          <div
            className={`commentemoji-button d-flex justify-content-between my-2 ${
              commentext === "" ? "d-none" : "d-block"
            }`}
          >
            🙂
            <div className="button">
              <button
                className="btn btn-light fw-semibold"
                type="reset"
                style={{ borderRadius: "20px" }}
                onClick={() => setcommenttext("")}
              >
                Cancel
              </button>
              <button
                className="btn btn-secondary ms-1"
                style={{ borderRadius: "20px" }}
                type="submit"
              >
                Comment
              </button>
            </div>
          </div>
        </form>
        <div className="commentList">
          <CommentList data={addmyComment} />
        </div>
      </div>
    </>
  );
};

export default CommentsContainer;
