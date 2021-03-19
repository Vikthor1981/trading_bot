global.fetch = require("node-fetch");
const indicators = require("./indicators.js");
const exchange = require("./exchange.js")



var strategy = function(){
  // IF BTC < MA ==> buy (if we have no position)
  // IF BTC > MA ==> sell (if we have a position)

  console.log("Executing strategy");

  indicators.hourlyMovingAverage("BTC","USD",100,function(ma){
      console.log("MA: ", ma);
      setTimeout(strategy,1000);
  })

}

strategy();
