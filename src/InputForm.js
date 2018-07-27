import React from "react";

const InputForm = props => {
  return (
    <div>
      <input type="text" onChange={event => props.handleOnChange(event)} />
      <button onClick={() => props.handleClickAdd()}>Add</button>
    </div>
  );
};

export default InputForm;
