import React from "react";
import "./GamePlay.css";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";

const GamePlay = () => {
  return (
    <div className="gamePlayMain">
      <div className="gamePlayTop">
        <TotalScore />
        <NumberSelector />
      </div>
      <div className="gamePlayBotom">
        <RoleDice />
      </div>
    </div>
  );
};

export default GamePlay;
