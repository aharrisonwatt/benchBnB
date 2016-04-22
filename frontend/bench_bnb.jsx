var React = require('react'),
    ReactDOM = require('react-dom'),
    BenchStore = require('./stores/bench'),
    ApiUtil = require('./util/api_util');


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <h1>Hello World</h1>,
    document.getElementById('root')
  );
});
