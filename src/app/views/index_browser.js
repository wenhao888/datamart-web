var React = require("react");
var ReactDom = require("react-dom");
var Index  = require("./index/index").default;

var indexFactory = React.createFactory(Index);
var renderTarget = document.getElementById('content');
ReactDom.render(
    indexFactory({}),
    renderTarget
);