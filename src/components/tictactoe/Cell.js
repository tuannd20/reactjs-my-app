import React from "react";

// object destructuring
// const student = {
//   name: "Student",
//   age: 26,
// };
// const { name, age } = student;

const Cell = (props) => {
  const { value, onClick } = props;
  return (
    <div className="game-cell" onClick={props.onClick}>
      <div className="">{props.value}</div>
    </div>
  );
};

export default Cell;
