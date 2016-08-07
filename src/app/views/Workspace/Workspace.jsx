import React from "react";
import MainMenu from "./MainMenu";
import Logo from "../shared/Logo";


var logoStyle = {
    marginLeft: "5px",
    display: "inline-block"
};

var menuContainerStyle = {
    float: "right",
    marginRight: "20px"
};


var Workspace = React.createClass({
    render: function () {
        return <div className="rootContainer">
            <div className="mainMenuBarStyle">
                <div style={logoStyle}>
                    <Logo/>
                </div>
                <div style={menuContainerStyle}>
                    <MainMenu />
                </div>
            </div>
            <div className="mainContainer">
                {this.props.children}
            </div>
            <div className="footer">
                this is footer
            </div>
        </div>
    }
});


export default Workspace;