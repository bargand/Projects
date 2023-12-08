import React from "react";
import { Tilt } from "react-tilt";

const Home = () => {
  return (
    <div className="main">
      <div className="mainUpper">
        <a href="/" className="menuLogo">
          <img src=".\logo.png" alt="img" />
        </a>
        <a href="/" className="menuText">
          Menu
        </a>
      </div>
      <div className="mainBottom">
        <div className="mainBottomImg">
          <Tilt>
            <img src=".\middleimg.png" alt="" />
          </Tilt>
        </div>
        <div className="mainBottomText">
          <div className="mainBottomTextUpper">
            <div className="mainBottomTextUpperLeft">
              <h1>Digital</h1>
            </div>
            <div className="mainBottomTextUpperRight">
              <Tilt>
                <i className="bx bx-right-arrow-alt"></i>
              </Tilt>
            </div>
          </div>
          <div className="mainBottomTextLower">
            <div className="mainBottomTextLowerLeft">
              <p>
                The agency that <br />
                covers your digital <br />
                needs in a creative <br />
                and efficient way
              </p>
            </div>
            <div className="mainBottomTextLowerRight">
              <h1>Cover</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
