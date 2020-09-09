import React from "react";
import Contact from "./Contact";
import { useSelector } from "react-redux";
import PreloaderContact from "./PreloaderContact";

function RecentChats() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const loading = useSelector((state) => state.contacts.loading);
  const enteredText = useSelector((state) => state.contacts.enteredText);

  const filteredContacts = contacts.filter(item => (
      item.fullname.toLowerCase().indexOf(enteredText.toLowerCase()) !== -1)
  );

  return (
    <div className="recent-chats">
      {loading ? (
        <div>
          <PreloaderContact />
          <PreloaderContact />
          <PreloaderContact />
          <PreloaderContact />
          <PreloaderContact />
          <PreloaderContact />
          <PreloaderContact />
        </div>
      ) : (
        filteredContacts.map((item) => (
          <Contact key={item._id} contact={item} />
        ))
      )}
    </div>
  );
}
export default RecentChats;
