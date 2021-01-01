import React, { useState } from 'react'
import { showInfoBar } from "../../../../redux/actions/chat";
import { useDispatch, useSelector } from 'react-redux'
import { useHotkeys } from "react-hotkeys-hook";
import "./setting.css";

function Setting() {
  const dispatch = useDispatch();

  const [animate, setAnimate] = useState(null);

  const showBar = useSelector(state => state.chat.showBar);

  const handleShow = () => {
    if (showBar) {
      setAnimate('setting-rotate');
    } else {
      setAnimate('setting-rotate-back');
    }
    dispatch(showInfoBar())
  };

  useHotkeys("shift+p", () => dispatch(showBar()));

  return (
    <div className="setting">
      <span className={`setting-span material-icons ${animate}`} onClick={handleShow}>
        settings
      </span>
    </div>
  );
}

export default Setting;
