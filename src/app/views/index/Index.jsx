import React from "react";
import Logo from './Logo';
import MainMenu from "./MainMenus"
import MessageList from "./MessageList";

var logoStyle = {
    marginLeft: "5px",
    display: "inline-block"
};

var menuContainerStyle = {
    float: "right",
    marginRight: "20px"
};

const Index = (context) => {
    return (
        <div className="rootContainer">
            <div className="mainMenuBarStyle">
                <div style={logoStyle}>
                    <Logo/>
                </div>
                <div style={menuContainerStyle}>
                    <MainMenu />
                </div>
            </div>
            <div className="mainContainer">
                <MessageList/>
            </div>
            <div className="footer">
                this is footer
            </div>
        </div>
    )
};

export default  Index;