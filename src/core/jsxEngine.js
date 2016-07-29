'use restrict';
import React from 'react';
import ReactDomServer from 'react-dom/server';


function JsxEngine (filePath, options, callback) {
    var  view  = require(filePath).default;
    var viewFactory =  React.createFactory(view);
    var html = ReactDomServer.renderToString(viewFactory(options));
    callback(null, html);
}


export default JsxEngine;