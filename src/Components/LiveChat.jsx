import React, { useEffect, useState } from "react";
import ChatMesage from "./ChatMesage";
import { useDispatch, useSelector } from "react-redux";
import { addlivemessage } from "../Utils/LiveChatSlice";
import { generateRandomName, makeid } from "../Utils/Helper";
import { toggleMenu } from "../Utils/ToggleSlice";
const LiveChat = () => {
  const liveChatArraylist = useSelector((store) => store.livechat.liveChatList);
  const myTogglemenu = useSelector((store) => store.toggle.isMenuOpen);

  const [text, settext] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addlivemessage({
          name: generateRandomName(),
          message: makeid(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={myTogglemenu ? "" : "d-none"}>
      <div
        className="chat-message-container card p-2"
        style={{
          height: "400px",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {liveChatArraylist.map((items, key) => (
          <ChatMesage key={key} name={items.name} message={items.message} />
        ))}
      </div>
      <form
        className="send-message-container d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addlivemessage({
              name: "Kunal Nath",
              message: text,
            })
          );
          settext("");
        }}
      >
        <input
          className="form-control shadow-none"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="Enter your comment here"
        />
        <button className="btn btn-success" type="submit">
          Comment
        </button>
      </form>
      </div>
      <div className="hide-live-chat">
        <button
          className="btn btn-secondary w-100 rounded-pill my-3"
          onClick={() => dispatch(toggleMenu())}
        >
          Hide Chat
        </button>
      </div>
    </>
  );
};

export default LiveChat;
