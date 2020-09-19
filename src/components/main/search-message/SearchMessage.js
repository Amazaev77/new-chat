import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showSearchInput, setSearchLine, clearInput } from "../../../redux/actions/chat";
import './search-message.css';

function SearchMessage() {
  const showSearch = useSelector((state) => state.chat.showSearch);
  const searchLine = useSelector((state) => state.chat.searchLine);

  const dispatch = useDispatch();
  const handleSearch = () => dispatch(showSearchInput());
  const handleString = (e) => dispatch(setSearchLine(e.target.value));
  const handleClear = () => dispatch(clearInput());
  return (
    <div className="search-message">
      <span className="icon-search-chat material-icons" onClick={handleSearch}>
        search
      </span>
      <div className="header-input-container">
        {showSearch && (
          <input
            className="search-message-input"
            onChange={handleString}
            value={searchLine}
          />
        )}
        {searchLine.length !== 0 && (
          <span className="clear-input material-icons" onClick={handleClear}>
          close
        </span>
        )}
      </div>
    </div>
  );
}

export default SearchMessage;
