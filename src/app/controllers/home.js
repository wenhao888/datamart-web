'use strict';

import React from "react";
import {Router} from 'express';
import fluxer from "fluxer";

import Home from "../views/Home";
import { match, RouterContext } from 'react-router'
import routes from '../views/Workspace/routes'

const router = Router();


router.get('/', (req, res) => {
    var data = {
        messages:['message1', "message2", "message3"]
    };

    var html = fluxer("home",Home, data);
    res.render('templates/default', {content: html, script: 'home_browser.js', style: "index.css"});
});


router.get("/workspace", (req, res) => {
    match({routes: routes, location: req.url}, (error, redirectLocation, renderProps) => {
        var data = {
            messages:['message1', "message2", "message3"]
        };

        var html = fluxer("workspace", () => (<RouterContext {...renderProps} />), data );
        res.render('templates/default', {content: html, script: 'workspace_browser.js', style: "index.css"});

    });
});

export default router;
