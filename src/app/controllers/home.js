'use strict';

import React from "react";
import {Router} from 'express';
import fluxer from "fluxer";


import Home from "../views/Home";
import Workspace from "../views/Workspace"
import respRender from "../../core/respRender";

const router = Router();


router.get('/', (req, res) => {
    var data = {
        messages:['message1', "message2", "message3"]
    };

    var html = fluxer("home",Home, data);
    respRender.render(res, {content: html, script: 'home_browser.js', style: "index.css"});
});


router.get("/workspace", (req, res) => {
   var html = fluxer("workspace", Workspace);
    respRender.render(res, {content: html, script: 'workspace_browser.js', style: "index.css"});

});

export default router;
