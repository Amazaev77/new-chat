import React from "react";
import InfoContact from "./InfoContact";
import { useSelector } from "react-redux";
import "./info-bar.css";
import { useParams } from "react-router-dom";

function InfoBar() {
  const paramsId = useParams().id;

  const userdata = useSelector((state) =>
    state.contacts.items.find((item) => item._id === paramsId)
  );
  return (
    <div className="info-bar">
      <div className="inner-info-bar">
        <InfoContact />
        <div className="social-block">
          <div className="social">Social</div>
          <div className="messengers">
            <div className="instagram">
              <i className="ico fab fa-instagram" />
              <span className="nick-messenger">
                {userdata?.socials?.instagram}
              </span>
            </div>
            <div className="twitter">
              <i className="ico fab fa-twitter" />
              <span className="nick-messenger">
                {userdata?.socials?.twitter}
              </span>
            </div>
            <div className="facebook">
              <i className="ico fab fa-facebook-f" />
              <span className="nick-messenger">
                {userdata?.socials?.facebook}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBar;
