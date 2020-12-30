import React from "react";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import PreloaderContact from "./PreloaderContact";
import "./recent-chats.css";

function RecentChats() {
  const loading = useSelector((state) => state.contacts.loading);

  const contacts = useSelector((state) => {
    const enteredText = state.contacts.enteredText;

    return state.contacts.items.filter(
      (contact) =>
        contact.fullname.toLowerCase().indexOf(enteredText.toLowerCase()) !== -1
    );
  });
  console.log(contacts)

  const preloader = new Array(7)
    .fill()
    .map((_, index) => <PreloaderContact key={index} />);

  return (
    <div className="recent-chats">
      {loading
        ? preloader
        : contacts.map((item) => <Contact key={item._id} contact={item} />)}
    </div>
  );
}
export default RecentChats;
