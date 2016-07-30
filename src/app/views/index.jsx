import React from "react";
import Logo from './index/logo';
import MainMenu from "./index/mainMenus"


const bodyStyle = {
    minHeight:"100%",
    backgroundColor:"aliceblue",
    padding:"0",
    margin:"0",
    display:"flex",
    flexDirection: 'column'
};

const mainMenuBarStyle ={
    backgroundColor:'yellow',
    height:"100px",
    lineHeight:"100px",
    flexGrow: "0",
};

const mainMenuStyle ={
    float:"right",
    marginRight:"20px"
};

const mainContainerStyle = {
    flexGrow: "1"
};

const footStyle = {
    height: "80px",
    lineHeight: "80px",
    flexGrow: 0 ,
    backgroundColor:"red",
};


const LogoStyle ={
    display:"inline-block",
    backgroundColor : "orange",
    marginLeft:"15px"
};

const Index = () => (
    <html>
       <head>
       </head>

       <body style={bodyStyle}>
          <div style={mainMenuBarStyle}>
              <div style={LogoStyle}>
                  <Logo/>
              </div>
              <div style={mainMenuStyle}>
                <MainMenu />
              </div>
          </div>
          <div style={mainContainerStyle}>

                this is my index page
          </div>
          <div style={footStyle}>
              this is footer
          </div>
       </body>
    </html>
);

export default  Index;