var ServerActions = require("../actions/server_actions");

var ApiUtil = {
  fetchBenches: function(bounds){
    $.ajax({
      url: "api/benches",
      method: "GET",
      data: bounds,
      success: function(benches){
        ServerActions.receiveAllBenches(benches);
      }
    });
  }
};

module.exports = ApiUtil;
