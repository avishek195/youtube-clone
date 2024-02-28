import { FaDotCircle } from "react-icons/fa";
import pic1 from "../../../../public/photo-1709038391881-db3e3024cd4a.jpg";

import "./VideoCartList.css";

const VideoCartList = ({ videoList }) => {
  return (
    <div className="videocartlist-container">
      {videoList.map((e) => {
        return (
          <div className="video-list" key={e.id}>
            <div className="video-pic">
              <img src={e.thumnail} className="pic" alt="thumnail" srcset="" />
            </div>
            <div className="owner-details">
              <div className="owner-channel-pic">
                <img
                  src={e.cheenalpic}
                  className="pic"
                  alt="thumnail"
                  srcset=""
                />
              </div>
              <div className="others">
                <div className="video-title">{e.title}</div>
                <div className="views">
                  <div className="cheenel-name">{e.cheenalname}</div>
                  <div className="views-part">
                    <span>{e.views}</span>
                    <FaDotCircle />
                    <span>{e.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoCartList;
