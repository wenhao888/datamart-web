'use strict';


import { Router } from 'express';
import fluxer from "fluxer";
import index from "../views/index/index";
import respRender from "../../core/respRender";

const router = Router();


router.get('/', (req, res) => {
  var html = fluxer("index", index);
  respRender.render(res, {content: html, script:'index_browser.js', style:"index.css"});
});


export default router;
