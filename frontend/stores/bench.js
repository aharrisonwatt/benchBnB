var BenchConstants = require('../constants/bench_constants');

var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _benches = {};
var BenchStore = new Store(AppDispatcher);

BenchStore.all = function () {
  return Object.assign({}, _benches);
};

BenchStore.__onDispatch = function (payload) {
    switch(payload.actionType) {
      case BenchConstants.BENCHES_RECEIVED:
        _benches = payload.benches;
        break;
    }
  };

module.exports = BenchStore;
