import React from "react";

const List = props => {
  return (
    <div>
      {props.names.map((name, i) => {
        if (props.luckyWinnerIndex === i) {
          return (
            <li key={i} id="winner">
              {name}
            </li>
          );
        } else {
          return (
            <li key={i} id="">
              {name}
            </li>
          );
        }
      })}
    </div>
  );
};

export default List;
