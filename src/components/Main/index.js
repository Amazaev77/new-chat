import React, { useEffect } from "react";
import Header from "./Header";
import Chat from "./Chat";
import Footer from "./Footer";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import { loadChat } from "../../redux/actions/chat";
import NoSelected from "../App/NoSelected";
import scrollChatToBottom from "../../utils/scrollChatToBottom";
import { useParams } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();

  const profileId = useSelector((state) => state.profile._id);
  const loading = useSelector((state) => state.profile.loading);

  const chatId = useParams().id;

  useEffect(() => {
    if (chatId && !loading) {
      dispatch(loadChat(chatId, profileId));
      scrollChatToBottom();
    }
  }, [chatId, profileId, dispatch, loading]);

  if (!chatId) {
    return <NoSelected />;
  }

  if (loading) {
    return null;
  }

  return (
    <div className="main">
      <div className="inner-main" id="chat">
        <Header />
        <Chat />
        <Footer />
      </div>
    </div>
  );
}

export default Main;