var BenchConstants = require('../constants/bench_constants');

var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _benches = {};
var BenchStore = new Store(AppDispatcher);

//API

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function (payload) {
    switch(payload.actionType) {
      case BenchConstants.BENCHES_RECEIVED:
        resetBenches(payload.benches);
        BenchStore.__emitChange();
        break;
    }
  };

//Privite Methods

function resetBenches(benches){
  _benches = {};

  benches.forEach(function(bench){
    _benches[bench.id] = bench;
  });
}

module.exports = BenchStore;
