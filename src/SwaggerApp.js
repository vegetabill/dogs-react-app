import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { buildPath } from "./api-client/dogs-api";

const SwaggerApp = () => <SwaggerUI url={buildPath("/swagger.json")} />;

export default SwaggerApp;
