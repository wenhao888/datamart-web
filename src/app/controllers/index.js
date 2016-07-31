'use strict';


import { Router } from 'express';
import jsxRender from "../../core/jsxRender";

const router = Router();


router.get('/', (req, res, next) => {
  var html = jsxRender.render("index/index.js", {});
  res.render('index/index', { content: html})

});


export default router;
