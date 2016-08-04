'use strict';

import React from "react";
import {Router} from 'express';
import fluxer from "fluxer";

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Index from "../views/index/Index";
import respRender from "../../core/respRender";
import Reducer from "../views/index/Reducer";

const router = Router();




router.get('/', (req, res) => {
    let store = createStore(Reducer);
    store.dispatch({type: "initialize", state: {messages: ["hello"]}});
    var html = fluxer("index", ()=> (
            <Provider store={store}>
                <Index />
            </Provider>),
        store.getState()
    );

    respRender.render(res, {content: html, script: 'index_browser.js', style: "index.css"});
});


export default router;
