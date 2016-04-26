var React = require('react');
var PropTypes = React.PropTypes;
var BenchStore = require('../stores/bench'),
    ClientActions = require('../actions/client_actions');

module.exports = React.createClass({

  getInitialState: function(){
    return { benches: [] };
  },

  componentDidMount: function(){
      this.benchListener = BenchStore.addListener(this._onChange);
      var mapDOMNode = this.refs.map;
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 12
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
      var map = this.map;
      this.map.addListener('idle', function() {
        var bounds = {};
        bounds['northEast'] = (map.getBounds().getNorthEast());
        bounds['southWest'] = (map.getBounds().getSouthWest());
        ClientActions.fetchBenches(bounds);
      });
    },

    componentWillUnmount: function () {
      this.benchListener.remove();
    },

    _onChange: function(){
      this.setState( {benches: BenchStore.all()});
    },

    addMarkers: function () {
      var benches = this.state.benches;
      var that = this;

      Object.keys(benches).map(function(benchId){
        var bench = benches[benchId];
        var myLatlng = new google.maps.LatLng(bench.lat,bench.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: bench.description
            });
        return (
          marker.setMap(that.map)
        );
      });
    },

  render: function() {
    this.addMarkers();
    console.log("rendering map");
    return (
      <div className="map" ref="map"/>
    );
  }

});
