import React from "react";
import Index from "./index/index";
import fluxerFactoy from "fluxer";
import { Provider } from 'react-redux'
import { createStore } from 'redux'

var fluxer = fluxerFactoy(document);

let store = createStore((state, action) => {
    return state;
});

fluxer.render("index", ()=> (
    <Provider store={store}>
        <Index />
    </Provider>)
);

