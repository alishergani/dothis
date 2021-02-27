import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

const Router = () => (
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={App} />
            {/* <Route component={NotFound} /> */}
            </Switch>
        </BrowserRouter>
    </React.StrictMode>
);

export default Router;