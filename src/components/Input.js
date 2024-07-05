import React from "react";

const Input = (props) => {
  return (
    <input
      className={props.className}
      placeholder={props.placeholder}
      value={props.value}
      readOnly
    />
  );
};

export default Input;
