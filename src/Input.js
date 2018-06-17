import React from "react";

const Input = props => {
  return (
    <div>
      <input type="text" onChange={event => props.handleChange(event)} />
    </div>
  );
};

export default Input;
