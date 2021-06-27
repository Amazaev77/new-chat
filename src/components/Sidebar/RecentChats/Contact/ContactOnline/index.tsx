import React from 'react'
import './contactOnline.less'

type PropsType = {
  online: boolean
}

const ContactOnline: React.FC<PropsType> = ({ online }) => {
  if (!online) {
    return null
  }

  return <div className="online-contact" />
}

export default ContactOnline
