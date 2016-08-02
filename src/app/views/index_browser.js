import React from "react";
import Index from "./index/index";
import fluxerFactoy from "fluxer";
import { Provider } from 'react-redux'
import { createStore } from 'redux'

var fluxer = fluxerFactoy(document);


fluxer.render("index", ()=> {
   let store = createStore((state, action) => {
      return state;
   });
   return (
       <Provider store={store}>
          <Index />
       </Provider>)
});

