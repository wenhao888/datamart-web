import React from 'react';

import { Router, Route, Link, browserHistory } from 'react-router'


const MainMenus= (props)=> (
    <ul className="mainMenuList">
        <li>
            <Link to="/workspace#profile"> Profile </Link>
            <Link to="/workspace#dashboard"> Dashboard </Link>
        </li>
        <li>
           <a href="/"> Log out </a>
        </li>
    </ul>

);

export default MainMenus;