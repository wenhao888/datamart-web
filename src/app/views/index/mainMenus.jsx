import React from 'react';



const MainMenus= (props)=> (
    <ul className="mainMenuList">
        <li>
            <input type="text" placeholder="login name" />
            <input type="text" placeholder="password" />
            <button>Login</button>
        </li>

        <li>
            Registration
        </li>
    </ul>

);

export default MainMenus;