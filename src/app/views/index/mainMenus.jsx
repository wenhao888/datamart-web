import React from 'react';

var menuListStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "0"
};

var menuItemStyle = {
    display:"inline",
    paddingRight:"10px",
    paddingLeft:"10px"

};

const MainMenus= (props)=> (
    <ul style={menuListStyle}>
        <li style={menuItemStyle}>
            <input type="text" placeholder="login name" />
            <input type="text" placeholder="password" />
            <button>Login</button>
        </li>



        <li style={menuItemStyle}>
            Registration
        </li>
    </ul>

);

export default MainMenus;