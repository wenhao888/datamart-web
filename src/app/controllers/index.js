'use strict';

import React from "react";
import { Router } from 'express';
import fluxer from "fluxer";

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Index from "../views/index/index";
import respRender from "../../core/respRender";

const router = Router();


router.get('/', (req, res) => {
  var html = fluxer("index", ()=> {
      let store = createStore((state, action) => {
          return state;
      });
      return (
      <Provider store={store}>
        <Index />
      </Provider>)
   });

  respRender.render(res, {content: html, script:'index_browser.js', style:"index.css"});
});


export default router;
