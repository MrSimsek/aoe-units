import React from "react";

import "./index.scss";

const RangeSlider = ({
  min,
  max,
  isDisabled,
  setRange
}) => {
  let firstHandle = null;
  let secondHandle = null;

  return (
    <div className="range-slider">
      <input
        ref={input => (firstHandle = input)}
        defaultValue="0"
        min={min}
        max={max}
        type="range"
        disabled={isDisabled}
        onChange={event =>
          setRange(
            parseInt(firstHandle.value, 10) < parseInt(secondHandle.value, 10)
              ? { min: event.target.value, max: secondHandle.value }
              : { min: secondHandle.value, max: event.target.value }
          )
        }
      />
      <input
        ref={input => (secondHandle = input)}
        defaultValue="200"
        min={min}
        max={max}
        type="range"
        disabled={isDisabled}
        onChange={event =>
          setRange(
            parseInt(firstHandle.value, 10) > parseInt(secondHandle.value, 10)
              ? { min: event.target.value, max: firstHandle.value }
              : { min: firstHandle.value, max: event.target.value }
          )
        }
      />
    </div>
  );
};

export default RangeSlider;
