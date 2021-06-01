import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './preloader-contact.css'

const PreloaderContact: React.FC = () => {
  return (
    <div className="contact">
      <div className="circle-preloader">
        <Skeleton circle={true} height={50} width={50} />
      </div>
      <div className="name-mess">
        <div className="name">
          <Skeleton />
        </div>
        <div className="mess">
          <Skeleton />
        </div>
      </div>
      <div className="time" />
    </div>
  )
}

export default PreloaderContact
