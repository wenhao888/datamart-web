import React from "react";
import Logo from './logo';
import MainMenu from "./mainMenus"
import TestContainer from "./testContainer";

var logoStyle = {
    marginLeft:"5px",
    display:"inline-block"
};

var menuContainerStyle = {
    float: "right",
    marginRight: "20px"
};

const Index = () => (
    <div className="rootContainer">
          <div className="mainMenuBarStyle" >
              <div style={logoStyle}>
                  <Logo/>
              </div>
              <div style={menuContainerStyle}>
                <MainMenu />
              </div>
          </div>
          <div className="mainContainer">
               <TestContainer/>
          </div>
          <div className="footer">
               this is footer
          </div>
    </div>
);

export default  Index;