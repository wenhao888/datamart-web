import React from "react";
import Logo from './Logo';
import MainMenu from "./MainMenus"
import MessageList from "./MessageList";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from "./reducer";


var logoStyle = {
    marginLeft: "5px",
    display: "inline-block"
};

var menuContainerStyle = {
    float: "right",
    marginRight: "20px"
};


var Home = React.createClass({
    getInitialState: function () {
        this.store = createStore(reducer);
        this.store.dispatch({type: "initialize", state: {messages: ["message1", "message2","message3"]}});
        return {};
    },
    render: function () {
        return (
            <Provider store={this.store}>
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
            </Provider>
        )
    }
});

export default Home;



