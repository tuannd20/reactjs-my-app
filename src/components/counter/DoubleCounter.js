import React, { useState } from "react";

function DoubleCounter() {
  const [count, setCount] = useState(0);

  const handleDoubleCounter = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div className="">
      <div className="button" onClick={handleDoubleCounter}>
        Double Counter
      </div>
      <span>{count}</span>
    </div>
  );
}

export default DoubleCounter;
