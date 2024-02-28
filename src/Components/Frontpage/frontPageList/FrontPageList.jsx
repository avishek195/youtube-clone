import React from "react";

import "./FrontPageList.css";
const FrontPageList = ({ list }) => {
  return (
    <div className="list-container">
      {list.map((e) => {
        return (
          <div className="list-cart" key={e.id}>
            {e.name}
          </div>
        );
      })}
    </div>
  );
};

export default FrontPageList;
