import React from "react";

const Button = (props) => {
  return (
    <div className="col">
      <button
        className={props.className}
        style={{ width: "100%" }}
        onClick={() => props.onClick(props.text)}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
