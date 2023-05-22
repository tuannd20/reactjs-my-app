import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    // stale state
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 1000);
  };

  return <div onClick={handleIncrement}>Increment {count}</div>;
}

export default Counter;
