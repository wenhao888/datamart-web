import React from "react";
import Index from "./index/index";


var indexFactory = React.createFactory(Index);
var renderTarget = document.getElementById('root');
React.render(
    indexFactory({}),
    renderTarget
);