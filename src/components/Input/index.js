import React, { useState } from "react";
import "./Input.scss";

const Input = (props) => {
  const { type, value, onChange, onBlur, placeholder, error, label } = props;
  const [inputType, setInputType] = useState(type);

  const togglePassword = () => {
    if (inputType === "password") {
      setInputType("text");
      return;
    }
    setInputType("password");
  };

  return (
    <div className="input__field">
      <label htmlFor="">{label}</label>
      <div className="input__wrapper">
        {type === "password" ? (
          <>
            <input
              type={inputType}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e)}
              onBlur={onBlur}
            />
            {inputType === "password" ? (
              <i className="fas fa-eye-slash" onClick={togglePassword}></i>
            ) : (
              <i className="fas fa-eye" onClick={togglePassword}></i>
            )}
          </>
        ) : (
          <input
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e)}
            onBlur={onBlur}
          />
        )}
      </div>
      <span className="error__message">{error}</span>
    </div>
  );
};

export default Input;
