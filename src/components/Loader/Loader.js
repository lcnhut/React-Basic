import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader__wrapper">
      <div className="loader__content">
        <h1 className="title">Loading</h1>
        <div className="rainbow-marker-loader"></div>
      </div>
    </div>
  );
};

export default Loader;
