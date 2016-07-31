import React from "react";
import Logo from './logo';
import MainMenu from "./mainMenus"

var logoStyle = {
    marginLeft:"5px",
    display:"inline-block"
};

var menuContainerStyle = {
    float: "right",
    marginRight: "20px"
};

const Index = () => (
    <html>
       <head>
           <link rel="stylesheet" href="/style/index.css"></link>
       </head>

       <body>
          <div className="mainMenuBarStyle" >
              <div style={logoStyle}>
                  <Logo/>
              </div>
              <div style={menuContainerStyle}>
                <MainMenu />
              </div>
          </div>
          <div className="mainContainer">
                this is my index page
          </div>
          <div className="footer">
               this is footer
          </div>
       </body>
    </html>
);

export default  Index;