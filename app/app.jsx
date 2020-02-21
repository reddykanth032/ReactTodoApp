var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');



//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//add class
require('style!css!sass!applicationStyles');
ReactDOM.render(
  <p>Welcome to boilerplate 2 </p>,
  document.getElementById('app')
);
