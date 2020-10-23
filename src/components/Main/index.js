import React, { useEffect } from "react";
import Header from "./Header";
import Chat from "./Chat";
import Footer from "./Footer";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import { loadChat } from "../../redux/actions/chat";

// todo один источник истины
// single truth source
//todo убрать опенед из стейта редакса


function Main({ match }) {
  const dispatch = useDispatch();
  //const opened = useSelector((state) => state.application.opened);

  const profileId = useSelector((state) => state.profile._id);
  const chatId = match.params.id;


  useEffect(() => {
    dispatch(loadChat(chatId, profileId));
  }, [chatId, profileId, dispatch]);

  const profile = useSelector(state => state.profile.loading);

  if(profile) {
    return null
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
