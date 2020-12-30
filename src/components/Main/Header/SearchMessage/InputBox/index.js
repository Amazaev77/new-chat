import React from "react";
import "./input-box.css";
import { useDispatch, useSelector } from "react-redux";
import { clearInput, setSearchLine } from "../../../../../redux/actions/chat";

function InputBox() {
  const showSearch = useSelector((state) => state.chat.showSearch);
  const searchLine = useSelector((state) => state.chat.searchLine);

  const dispatch = useDispatch();

  const handleString = (e) => dispatch(setSearchLine(e.target.value));

  const handleClear = () => dispatch(clearInput());

  return (
    <>
      {showSearch && (
        <input
          className="search-message-input"
          onChange={handleString}
          value={searchLine}
        />
      )}
      {searchLine.trim().length > 0 && (
        <span className="clear-input material-icons" onClick={handleClear}>
          close
        </span>
      )}
    </>
  );
}

export default InputBox;
