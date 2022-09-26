import React, { useState } from "react";
import "./tooltip.css";

const Tooltip = (props) => {
  const [tooltipState, setTooltipState] = useState(false);
  function handleMouseEnter() {
    setTooltipState(true);
  }
  function handleMouseLeave() {
    setTooltipState(false);
  }
  return (
    <div
      className="tooltipWrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {tooltipState && <p className={`${props.direction}`}>Hello</p>}
    </div>
  );
};

export default Tooltip;
