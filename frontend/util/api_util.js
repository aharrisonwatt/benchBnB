var ServerActions = require("../actions/server_actions");

var ApiUtil = {
  fetchBenches: function(){
    $.ajax({
      url: "api/benches",
      method: "GET",
      success: function(benches){
        ServerActions.receiveAllBenches(benches);
      }
    });
  }
};

module.exports = ApiUtil;
