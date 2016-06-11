'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Contacts from './components/contacts';
import Footer from './components/footer';

const router = (
   <Router history = {browserHistory}>
      <Route path = "/" component = {Nav}>
         <IndexRoute component = {Footer} />
         <route path = "/home" component = {Home} />
         <Route path = "/about" component = {About} />
         <Route path = "/contacts" component = {Contacts} />
      </Route>
   </Router>
)

ReactDOM.render(router, document.getElementById('app'));
