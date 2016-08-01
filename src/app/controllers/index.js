'use strict';


import { Router } from 'express';
import jsxRender  from "../../core/jsxRender";
import respRender from "../../core/respRender";

const router = Router();


router.get('/', (req, res) => {
  var html = jsxRender.render("index/index.js", {});
  respRender.render(res, {content: html, script:'index_browser.js', style:"index.css"});
});


export default router;
