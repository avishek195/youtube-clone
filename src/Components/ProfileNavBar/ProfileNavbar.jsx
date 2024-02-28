import React from "react";
import profilePic from "../../../public/Mypic.jpeg";

import "./ProfileNavbar.css";

const ProfileNavbar = ({ newDiv }) => {
  return (
    <div>
      {newDiv && (
        <>
          <div className="new-profile">
            <div className="gmail-details">
              <div className="profile-pic">
                <img
                  src={profilePic}
                  alt="profile"
                  className="profile-pic"
                  srcset=""
                />
              </div>
              <div className="show-mini-profile">
                <div className="gmail-name">
                  <span>Avishek Mistry</span>
                  <br />
                  <span>@avishekmistry469</span>
                </div>
                <div className="other-profile">
                  <span className="oth-chen">View Your channel</span>
                </div>
              </div>
            </div>
            <div className="hr">
              <hr />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileNavbar;
