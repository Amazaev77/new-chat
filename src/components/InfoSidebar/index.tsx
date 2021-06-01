import React from 'react'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import InfoContact from './InfoContact'
import './info-bar.css'

const InfoSideBar: React.FC = () => {
  const { id: paramsId } = useParams<{ id: string }>()

  const userdata = useTypedSelector(state =>
    state.contacts.items.find(item => item._id === paramsId)
  )

  return (
    <div className="info-bar">
      <div className="inner-info-bar">
        <InfoContact />
        <div className="social-block">
          <div className="social">Social</div>
          <div className="messengers">
            {userdata?.socials?.instagram && (
              <div className="instagram">
                <i className="ico fab fa-instagram" />
                <span className="nick-messenger">
                  {userdata.socials.instagram}
                </span>
              </div>
            )}
            {userdata?.socials?.twitter && (
              <div className="twitter">
                <i className="ico fab fa-twitter" />
                <span className="nick-messenger">
                  {userdata.socials.twitter}
                </span>
              </div>
            )}
            {userdata?.socials?.facebook && (
              <div className="facebook">
                <i className="ico fab fa-facebook-f" />
                <span className="nick-messenger">
                  {userdata.socials.facebook}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoSideBar
