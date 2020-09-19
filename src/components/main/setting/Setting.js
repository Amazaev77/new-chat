import React from 'react';
import {showBar} from "../../../redux/actions/chat";
import {useDispatch} from "react-redux";
import { useHotkeys } from 'react-hotkeys-hook';
import './setting.css';


function Setting() {
  const dispatch = useDispatch();
  const handleShow = () => dispatch(showBar());

  useHotkeys('shift+p', () => dispatch(showBar()));


  return (
    <div className="setting">
      <span
        className="setting-span material-icons"
        onClick={handleShow}
      >
        settings
      </span>
    </div>
  );
}

export default Setting;