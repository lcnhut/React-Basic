import React, { useEffect, useState } from "react";
import "./Toast.scss";

const Toast = (props) => {
  const { toast, position, autoDelete, autoDeleteTime } = props;
  const [isHidden, setIsHidden] = useState(false);

  const onClickClose = () => {
    setIsHidden(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete) {
        setIsHidden(true);
      }
    }, autoDeleteTime);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
