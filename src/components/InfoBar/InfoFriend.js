import React from 'react';

function InfoFriend({userdata}) {
  return (
    <div className="info-friend">
      <div className="big-avatar">
        {userdata.hasOwnProperty('picture') ? (<img src="" width='50' alt=""/>) : (userdata.fullname[0])}
      </div>
      <div className="info-fullname">{userdata.fullname}</div>
      <div className="nickname">@{userdata.username}</div>
      <div className="connect">
        <span className="material-icons icons-connect call">call</span>
        <span className="material-icons icons-connect videocam">videocam</span>
        <span className="material-icons icons-connect email">email</span>
      </div>
    </div>
  );
}

export default InfoFriend;