import React,{useState} from 'react'
import "./App.css"

const App = () => {
  const [color, setColor] = useState(true)
  const divStyle = {
    background: color? "green": "red"
  }

  return (
    <>
    <div className="main">
      <div className="firstDiv" style={divStyle}></div>
      <div className="secondDiv">
        <div className="secondDivA"></div>
        <div className="secondDivB"></div>
      </div>
      <div className="thirdDiv"></div>
    </div>
    </>
  )
}

export default App
