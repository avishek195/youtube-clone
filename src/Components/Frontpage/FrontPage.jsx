import React from "react";

import FrontPageList from "./frontPageList/FrontPageList";
import SideNavBar from "../SideNavbar/SideNavBar";

import VideoLists from "../videoList/VideoLists";

import "./FrontPage.css";
const category = [
  {
    id: 1,
    name: "All",
    url: "#",
  },
  {
    id: 2,
    name: "Music",
    url: "#",
  },
  {
    id: 3,
    name: "Video",
    url: "#",
  },
  {
    id: 4,
    name: "Funny",
    url: "#",
  },
  {
    id: 5,
    name: "Web development",
    url: "#",
  },
  {
    id: 6,
    name: "Data Structure and Algorithm",
    url: "#",
  },
  {
    id: 7,
    name: "Cyber secqurety",
    url: "#",
  },
];
const FrontPage = () => {
  return (
    <>
      <FrontPageList list={category} />
      <div className="another-nav">
        <SideNavBar />
        <VideoLists />
      </div>
    </>
  );
};

export default FrontPage;
