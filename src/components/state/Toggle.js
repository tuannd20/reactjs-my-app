import React, { useState } from "react";
import "./ToggleStyles.css";

// stateless functional component: functional component ko sử dụng state
// function Toggle() {
//   return <div>Toggle</div>;
// }

// statefull functional component: functional component có sử dụng state
// function ToggleState() {
//   return <div className="toggle">ToggleState</div>;
// }

function Toggle() {
  // 1. enabling state
  // 2. initialize state
  // 3. reading state
  // 4. updating state
  // 5. Re-render: nên tối ưu để tránh việc bị re-render

  const [onToggle, setOnToggle] = useState(false);
  console.log(onToggle);

  const handleToggle = () => {
    setOnToggle((onToggle) => !onToggle);
  };

  return (
    <div>
      <div
        className={`toggle ${onToggle ? "active" : ""}`}
        onClick={handleToggle}
      >
        <div className={`spinner ${onToggle ? "active" : ""}`}></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOnToggle(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOnToggle(false)}>
          Off
        </div>
      </div>
    </div>
  );
}

export default Toggle;
