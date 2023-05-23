import React from "react";

// object destructuring
// const student = {
//   name: "Student",
//   age: 26,
// };
// const { name, age } = student;

const Cell = (props) => {
  const { value, onClick, className } = props;
  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      <div className="">{value}</div>
    </div>
  );
};

export default Cell;
