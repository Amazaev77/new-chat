import React from "react";
import { useDispatch } from "react-redux";
import "./search-message.css";
import { showSearchInput } from "../../../../redux/actions/chat";
import InputBox from "./InputBox";

function SearchMessage() {
  const dispatch = useDispatch();

  const handleSearch = () => dispatch(showSearchInput());

  return (
    <div className="search-message">
      <span className="icon-search-chat material-icons" onClick={handleSearch}>
        search
      </span>
      <div className="header-input-container">
        <InputBox />
      </div>
    </div>
  );
}

export default SearchMessage;
