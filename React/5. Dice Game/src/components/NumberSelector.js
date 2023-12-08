import React, { useState } from "react";
import "./NumberSelector.css";

const NumberSelector = () => {
  const arrayNumbers = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <div className="gamePlayTopRight">
      <div className="gamePlayTopRightDiv">
        {arrayNumbers.map((value, i) => (
          <button
            className="numberBTN"
            key={i}
            onClick={() => setSelectedNumber(value)}
            style={{
              backgroundColor: value === selectedNumber ? "black" : "white",
              color: value === selectedNumber ? "white" : "black",
            }}
          >
            {value}
          </button>
        ))}
      </div>
      <h3>Select Number</h3>
    </div>
  );
};

export default NumberSelector;
