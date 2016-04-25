var React = require('react'),
    BenchStore = require('../stores/bench'),
    ClientActions = require('../actions/client_actions');

module.exports = React.createClass({
  getInitialState: function () {
    return { benches: [] };
  },

  _onChange: function(){
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    this.benchListener = BenchStore.addListener(this._onChange);
    ClientActions.fetchBenches();
  },

  componentWillUnmount: function () {
    this.benchListener.remove();
  },

  render: function () {
    var benches = this.state.benches;
    return (
      <div className="bench-index">
          {
            Object.keys(benches).map(function (benchId){
              return (
                <ul key={benchId}> {benches[benchId].description}
                  <li>{benches[benchId].lat}</li>
                  <li>{benches[benchId].lng}</li>
                </ul>
              );
            })
          }
      </div>
    );
  }
});
