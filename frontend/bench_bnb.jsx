var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('./stores/bench'),
    ApiUtil = require('./util/api_util'),
    Index = require('./components/index');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Bench BnB</h1>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="benches" component={Index} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  ReactDOM.render(
    <Router history={HashHistory} routes={routes}/>, root);
});
