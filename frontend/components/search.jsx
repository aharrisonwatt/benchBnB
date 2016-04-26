var React = require('react'),
    Map = require('./map'),
    Index = require('./index');


module.exports = React.createClass({

  render: function() {
    console.log("rendering search.jsx");
    return (
      <div className="search">
        <Index/>
        <Map/>
      </div>
    );
  }

});
