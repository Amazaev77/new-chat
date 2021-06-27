import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import InfoSidebar from '../../InfoSidebar'

const AnimateInfoSidebar: React.FC = () => {
  const showInfoSidebar = useTypedSelector(
    state => state.messages.showInfoSidebar
  )

  return (
    <CSSTransition in={showInfoSidebar} timeout={470} unmountOnExit>
      <InfoSidebar />
    </CSSTransition>
  )
}

export default AnimateInfoSidebar
