'use restrict';

import config from '../config';
import path from 'path';
import React from 'react';
import ReactDomServer from 'react-dom/server';

class JsxRender {

    constructor(viewPath) {
        this._viewPath = viewPath;
    }

    render (jsxFile, options) {
        var jsxPath = path.join(this._viewPath, jsxFile);

        var  view  = require(jsxPath).default;
        var viewFactory =  React.createFactory(view);
        var html = ReactDomServer.renderToString(viewFactory(options));
        return html;
    }

}


export default new JsxRender(config.viewPath);