import React from "react";
import fluxerFactoy from "fluxer";
import Workspace from "./Workspace"

var fluxer = fluxerFactoy(document);
fluxer.render("workspace", Workspace);