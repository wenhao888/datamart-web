'use strict';

import path from 'path';

var rootPath =  path.normalize(__dirname);

export default {
  // environment
  env: process.env.NODE_ENV || 'development',
  // port on which to listen
  port: process.env.PORT || 3000,
  // path to root directory of this app
  root: rootPath,
  viewPath:  path.join(rootPath, 'app/views')
};
