import React from "react";
import fluxerFactoy from "fluxer";
import { Router, browserHistory } from 'react-router'
import routes from "./Workspace/routes";

var fluxer = fluxerFactoy(document);
fluxer.render("workspace", ()=> (<Router history={browserHistory} routes={routes} />));