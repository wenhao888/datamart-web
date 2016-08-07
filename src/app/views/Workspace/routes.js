import React from "react";
import {Route, IndexRoute} from 'react-router';
import Workspace from "./Workspace"
import Profile from "./Profile";

const Routes = <Route path="/workspace" component={Workspace}>
        <IndexRoute component={Profile}/>
    </Route>;

export default Routes;