import React from "react";
import {Route, IndexRoute} from 'react-router';
import Workspace from "./Workspace"
import Profile from "./Profile";
import Dashboard from "./Dashboard"

const Routes =
    <Route path="/workspace" component={Workspace}>
        <IndexRoute component={Profile}/>
        <Route path="profile" component={Profile}  />
        <Route path="dashboard" component={Dashboard}/>
    </Route>;

export default Routes;