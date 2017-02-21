import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './app.js';
import Breath from './breath.js';
import Intention from './intention.js';
import Heart from './heart.js';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
      <Route path="/breath" component={Breath}/>
      <Route path="/intention" component={Intention}/>
      <Route path="/heart" component={Heart}/>
  </Router>,
  document.getElementById('app')
);

