import React from 'react'
import './StartGame.css'

const StartGame = ({toggel}) => {
  return (
    <div className='mainContainer'>
      <div className="mainContainerLeft">
        <img src="\images\dices.png" alt="" />
      </div>
      <div className="mainContainerRight">
        <h1>DICE GAME</h1>
        <button onClick={toggel} className='StartGameBtn'>Play Now</button>
      </div>
    </div>
  )
}

export default StartGame

