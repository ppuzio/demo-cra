import React from 'react';
import './App.css';
import {ConnectedRouter} from "connected-react-router";
import configureStore, {history} from "./store";
import {Route, Switch} from "react-router";
import {Provider} from "react-redux";
import Home from "./pages/Home";
import Counter from "./components/Counter";

const store = configureStore({});

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/foo">
          <Home message={<div>hello</div>}/>
        </Route>
        <Route exact path="/counter">
          <Home message={<Counter step={1} counter={0}>hello</Counter>}/>
        </Route>
        <Route>
          <Home message={<div>other page</div>}/>
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>
);
