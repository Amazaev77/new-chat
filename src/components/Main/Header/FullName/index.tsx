import React from 'react'
import './fullname.less'
import { useParams } from 'react-router-dom'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'

const FullName: React.FC = () => {
  const loading = useTypedSelector(state => state.messages.loading)

  const { id: paramsId } = useParams<{ id: string }>()

  const userdata = useTypedSelector(state =>
    state.contacts.items.find(item => item._id === paramsId)
  )

  return (
    <div className="fullname">
      <div className="name-container">
        <div className="name-chat">
          {loading ? (
            <div className="updating-box">
              <div>
                <span className="material-icons">autorenew</span>
              </div>
              <div className="updating">Updating...</div>
            </div>
          ) : (
            userdata?.fullname
          )}
        </div>
        {userdata?.online && <div className="online-chat" />}
      </div>
    </div>
  )
}

export default FullName
