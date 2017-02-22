import React from 'react';
import {render} from 'react-dom';
//import {Router, Route, IndexRoute} from 'react-router'
import {Router, browserHistory} from 'react-router';
import routes from './routes';

render(
    <Router history={browserHistory}>{routes}</Router>, document.querySelector("#app")
);