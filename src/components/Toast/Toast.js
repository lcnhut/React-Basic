import React, { useState } from "react";
import "./Toast.scss";

const Toast = (props) => {
  const { toast, position, autoDelete, autoDeleteTime } = props;
  const [isHidden, setIsHidden] = useState(false);

  const onClickClose = () => {
    setIsHidden(true);
  };

  if (autoDelete) {
    setTimeout(() => {
      setIsHidden(true);
    }, autoDeleteTime);
  }

  return (
    <>
      {!isHidden ? (
        <div className={`notification-container ${position}`}>
          <div
            className={`notification toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button onClick={onClickClose}>X</button>
            <div className="notification-image">
              <img src={toast.icon} alt="" />
            </div>
            <div>
              <p className="notification-title">{toast.title}</p>
              <p className="notification-message">{toast.description}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Toast;
