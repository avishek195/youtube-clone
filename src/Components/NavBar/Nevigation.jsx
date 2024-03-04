import { Link } from "react-router-dom";
import { FaCamera, FaBell, FaSearch } from "react-icons/fa";
import { useState } from "react";

import pic from "../../../public/images.svg";
import profilePic from "../../../public/Mypic.jpeg";
import ProfileNavbar from "../ProfileNavBar/ProfileNavbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Nevigation.css";
import TemporaryDrawer from "../mui-components/Sidebar";
AOS.init({
  delay: 1000,
  duration: 400,
});

const Nevigation = () => {
  const [signin, setSignIn] = useState(false);
  const [newDiv, setNewDiv] = useState(false);

  const handleShowProfile = () => {
    setNewDiv((prev) => !prev);
  };

  const handelSign = () => {
    setSignIn(true);
  };
  return (
    <>
      <div className="nav-container">
        <div className="logo-container">
          <TemporaryDrawer />
          {/* <FaAlignJustify /> */}

          <Link>
            <img src={pic} alt="youtube" className="logo" />
          </Link>
        </div>
        <div className="search-container">
          <input type="text" className="Search-btn" placeholder="Search" />
          <span className="search">
            <FaSearch />
          </span>
        </div>

        {signin ? (
          <div className="profile-container new-container" onClick={handelSign}>
            <div className="create-btn">
              <FaCamera />
            </div>
            <div className="notification">
              <FaBell />
              <span className="count-notification">9+</span>
            </div>
            <div className="my-frofile">
              <div className="picure" onClick={handleShowProfile}>
                <img
                  src={profilePic}
                  className="profile-pic"
                  alt="Profile"
                  srcset=""
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-container" onClick={handelSign}>
            <div className="profile">A</div>
            <span className="signin">SignIn</span>
          </div>
        )}
      </div>
      <ProfileNavbar newDiv={newDiv} />
    </>
  );
};

export default Nevigation;
