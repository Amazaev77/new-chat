import React, { useState } from 'react'
import { showInfoSidebarSwitch } from '../../../../redux/actions/messages'
import { useDispatch } from 'react-redux'
import { useHotkeys } from 'react-hotkeys-hook'
import './setting.css'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

const Setting: React.FC = () => {
  const dispatch = useDispatch()

  const [animate, setAnimate] = useState<string | null>(null)

  const showInfoSidebar = useTypedSelector(
    state => state.messages.showInfoSidebar
  )

  const handleShow = () => {
    if (showInfoSidebar) {
      setAnimate('setting-rotate')
    } else {
      setAnimate('setting-rotate-back')
    }
    dispatch(showInfoSidebarSwitch())
  }

  useHotkeys('shift+p', handleShow)

  return (
    <div className="setting">
      <a className="github-link" href="https://github.com/Amazaev77/new-chat">
        <i className="github fab fa-github" />
      </a>
      <span
        className={`setting-span material-icons ${animate}`}
        onClick={handleShow}
      >
        settings
      </span>
    </div>
  )
}

export default Setting
