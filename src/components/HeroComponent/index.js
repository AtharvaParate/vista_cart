import React from "react";
import "./heroComponent.css";
import Vista from "./logo.png";
export default () => {
  return (
    <div className="hs-content">
      <div className="hs-img-frame">
        <img src={Vista} className="hs-img" alt="vistaCart-img" />
      </div>
    </div>
  );
};
