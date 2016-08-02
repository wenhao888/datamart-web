
import Index from "./index/index";
import fluxerFactoy from "fluxer";
import $ from "jquery";

var fluxer = fluxerFactoy(document);
fluxer.render("index", Index);

$(document).ready(function() {
   console.log("document is ready") ;
});