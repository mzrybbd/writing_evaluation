import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './index.css';
import App from './App';
import WriteingEvaluation from './Evaluation';
// import { withRouter } from 'react-router-dom';
// export default withRouter(WriteingEvaluation);
import * as serviceWorker from './serviceWorker';
ReactDOM.render((
  <Router>
      <Route path="/home" component={App} />
      <Route path="/evaluation" component={WriteingEvaluation} />
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
