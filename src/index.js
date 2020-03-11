import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SwaggerApp from "./SwaggerApp";

const AppToUse = window.location.pathname.match("/swagger") ? SwaggerApp : App;

ReactDOM.render(<AppToUse />, document.getElementById("root"));
