var React = require('react');
var ReactDOM = require('react-dom');
var AppChat=require('AppChat');


require('style!css!./css/style_login.css');
require('style!css!sass!./css/style.scss');

ReactDOM.render(
  <AppChat/>,
  document.getElementById('wrapper')
);
