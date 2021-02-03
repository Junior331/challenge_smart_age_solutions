import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  /* PLOP_ROUTE_IMPORT */
	Contact,
	Story,
	Our,
	Stores,
	Categories,
	Collections,
  Home,
} from ".";
import { Layout, Header } from "../components/modules";

export default function Routes(props) {
  return (
    <BrowserRouter>
      <Layout>
        <Header props={props} />
        <Switch>
          {/* PLOP_INJECT_ROUTE */}
				<Route exact path="/contact" component={ Contact } />
				<Route exact path="/story" component={ Story } />
				<Route exact path="/our" component={ Our } />
				<Route exact path="/stores" component={ Stores } />
				<Route exact path="/categories" component={ Categories } />
				<Route exact path="/collections" component={ Collections } />
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
