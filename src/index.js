import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import AILogin from './login/login';
import WriteingEvaluation from './Evaluation';
import History from './history';
import * as serviceWorker from './serviceWorker';
ReactDOM.render((
  <Router history={History}>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" exact={true} component={AILogin} />
      <Route path="/home" exact={true} component={App} />
      <Route path="/evaluation" component={WriteingEvaluation} />
    </Switch>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
