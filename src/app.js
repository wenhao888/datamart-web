'use strict';

// built-in
import path from 'path';
// external
import bodyParser from 'body-parser';
import compress from 'compression';
import cookieParser from 'cookie-parser';
import express from 'express';
import helmet from 'helmet';
import favicon from 'serve-favicon';
// local
import config from './config';
import controllers from './app/controllers/home';
import logger from './app/helpers/logger';
import exphbs from 'express-handlebars';


// EXPRESS SET-UP
// create app
const app = express();
// use jade and set views and static directories
app.set('views', config.viewPath);
app.engine('.hbs', exphbs({defaultLayout: 'defaultLayout', layoutsDir: config.viewPath + "/layouts",  extname: '.hbs'}));
app.set('view engine', '.hbs');


app.use(express.static(path.join(config.root, 'public')));
//add middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(compress());
app.use(cookieParser());
//app.use(favicon(path.join(config.root, 'static/img/favicon.png')));
app.use(helmet());
// set all controllers
app.use('/', controllers);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// general errors
app.use((err, req, res, next) => {
  const sc = err.status || 500;
  res.status(sc);
  console.log(err);



  res.render('error', {
    status: sc,
    message: err.message,
    stack: config.env === 'development' ? err.stack : ''
  });
});


// START AND STOP
const server = app.listen(config.port, () => {
  logger.info(`listening on port ${config.port}`);
});
process.on('SIGINT', () => {
  logger.info('shutting down!');
  server.close();
  process.exit();
});
