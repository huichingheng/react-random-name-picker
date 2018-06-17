import React from "react";

const AddButton = props => {
  return (
    <div>
      <button onClick={() => props.handleClickAdd()}>Add</button>
    </div>
  );
};

export default AddButton;
