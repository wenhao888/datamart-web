'use strict';
// this controller is meant to set up routes from all other controllers
// it also sets up basic express routes

import { Router } from 'express';
const router = Router();


// set basic routes
router.get('/', (req, res, next) => res.render('index', {
  title: 'datamart'
}));


// export router
export default router;
