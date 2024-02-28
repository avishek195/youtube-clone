import {
  FaHome,
  FaYoutube,
  FaGooglePlay,
  FaPortrait,
  FaHistory,
} from "react-icons/fa";

import "./SideNavBar.css";

const SideNavBar = () => {
  return (
    <>
      <div className="side-navbar-container">
        <div className="home side-nav">
          <div className="icons">
            <FaHome />
          </div>
          <span>Home</span>
        </div>
        <div className="Short side-nav">
          <div className="icons">
            <FaYoutube />
          </div>
          <span>Shorts</span>
        </div>
        <div className="subscriptions side-nav">
          <div className="icons">
            <FaGooglePlay />
          </div>
          <span>Subscriptions</span>
        </div>
        <div className="you side-nav">
          <div className="icons">
            <FaPortrait />
          </div>
          <span>You</span>
        </div>
        <div className="history side-nav">
          <div className="icons">
            <FaHistory />
          </div>
          <span>History</span>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
