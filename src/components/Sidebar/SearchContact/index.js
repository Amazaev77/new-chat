import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchContact } from "../../../redux/actions/contacts";
import "./search-contact.css";

function SearchContact() {
  const enteredText = useSelector((state) => state.contacts.enteredText);
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(setSearchContact(e.target.value));
  }

  return (
    <div className="search-contact">
      <input
        className="input-search-contact"
        placeholder="Search contact"
        value={enteredText}
        onChange={handleChange}
      />
      <span className="icon-search-sidebar material-icons">search</span>
    </div>
  );
}

export default SearchContact;
