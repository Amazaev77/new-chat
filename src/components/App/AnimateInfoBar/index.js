import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import InfoBar from '../../InfoBar';


function AnimateInfoBar () {
  const showBar = useSelector((state) => state.chat.showBar);

  return (
    <CSSTransition in={showBar} timeout={500} unmountOnExit>
      <InfoBar />
    </CSSTransition>
  )
}

export default AnimateInfoBar;