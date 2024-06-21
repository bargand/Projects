import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("green");
  useEffect(() => {
    const timer = setInterval(() => {
      setColor((prevColor) => (prevColor === "green" ? "red" : "green"));
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (color === "green") {
      document.querySelector(".firstDiv1").style.backgroundColor = "red"
      document.querySelector(".thirdDiv1").style.backgroundColor = "red"
    }
    else{
      document.querySelector(".firstDiv1").style.backgroundColor = "green"
      document.querySelector(".thirdDiv1").style.backgroundColor = "green"
    }
  })
  

  return (
    <>
      <div className="main">
        <div className="firstDiv">
          <div className="firstDiv1"></div>
          <div className="firstDiv2"></div>
          <div className="firstDiv3"></div>
        </div>
        <div className="secondDiv">
          <div className="secondDivA">
          <div className="secondDivA1" style={{ backgroundColor: color }}></div>
          <div className="secondDivA2"></div>
          <div className="secondDivA3"></div>
          </div>
          <div className="secondDivB" >
          <div className="secondDivB1" style={{ backgroundColor: color }}></div>
          <div className="secondDivB2"></div>
          <div className="secondDivB3"></div>
          </div>
        </div>
        <div className="thirdDiv">
          <div className="thirdDiv1"></div>
          <div className="thirdDiv2"></div>
          <div className="thirdDiv3"></div>
        </div>
      </div>
    </>
  );
};

export default App;
