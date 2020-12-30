import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./message-in-box.css";
import { useParams } from "react-router-dom";

function MessageInBox({ message }) {
  const paramsId = useParams().id;
  const userdata = useSelector((state) =>
    state.contacts.items.find((item) => item._id === paramsId)
  );

  return (
    <div className="message-in-box">
      <div className="inner-message-in">
        <div className="avatar-chat">{userdata.fullname[0]}</div>
        <div className="message-in">
          {message.content}
          <div className="in-time">{dayjs(message.time).format("HH:mm")}</div>
        </div>
      </div>
    </div>
  );
}

export default MessageInBox;
