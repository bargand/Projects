import React, { useState } from "react";
import "./RoleDice.css";

const RoleDice = () => {
    const [currentDice, setCurrentDice] = useState(1)

    const generateRandomNumber =(min, max) =>{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const roleDice = () =>{
        const randomNumber = generateRandomNumber(1,6);
        setCurrentDice((prev)=>randomNumber);
    }



  return (
    <div className="gamePlayBottomMain">
      <img src={`/images/dice_${currentDice}.png`} className="dice" alt="dice 1" onClick={roleDice}/>
      <p>Click On Dice To Roll</p>
      <button className="mainBtn1">Reset Score</button>
      <button className="mainBtn2">Show Rules</button>
    </div>
  );
};

export default RoleDice;
