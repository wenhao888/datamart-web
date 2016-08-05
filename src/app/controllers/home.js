'use strict';

import React from "react";
import {Router} from 'express';
import fluxer from "fluxer";


import Home from "../views/Home";
import respRender from "../../core/respRender";

const router = Router();


router.get('/', (req, res) => {
    var data = {
        messages:['hello']
    };

    var html = fluxer("home", ()=> (
        <Home />
        ), data);

    respRender.render(res, {content: html, script: 'home_browser.js', style: "index.css"});
});


export default router;
