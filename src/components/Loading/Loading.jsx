import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading__wrapper">
      <div className="loading__content">
        <h1 className="title">Loading</h1>
        <div className="rainbow-marker-loader"></div>
      </div>
    </div>
  );
};

export default Loading;
