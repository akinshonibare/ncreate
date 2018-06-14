import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Art from "./Components/Pages/Art/Art";
import Blog from "./Components/Pages/Blog/Blog";
import Clothing from "./Components/Pages/Clothing/Clothing";
import Home from "./Components/Pages/Home/Home";
import Music from "./Components/Pages/Music/Music";
import Youtube from "./Components/Pages/Youtube/Youtube";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import NewCreator from "./Components/Pages/NewCreator/NewCreator";

const routes = (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/music" component={Music} />
        <Route path="/art" component={Art} />
        <Route path="/youtube" component={Youtube} />
        <Route path="/clothing" component={Clothing} />
        <Route path="/blog" component={Blog} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/newcreator" component={NewCreator} />
      </Switch>
    </App>
  </Router>
);

export default routes;
