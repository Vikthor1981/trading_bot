const GeminiAPI = require("gemini-api").default;
const secret = "aWvTysys4KiQdFGf8LTAZtRoRk5";
const key = "account-gd5X2lbe1b5O5Hjc1bQ9";
const restClient = new GeminiAPI({key, secret, sandbox:true});


module.exports = {

  marketBuyBitcoin:function(){

    return restClient.newOrder({amount:1,
                         price:10000,
                         side:"buy",
                         symbol:"btcusd",
                         options:["immediate-or-cancel"]})


  },

  marketSellBitcoin:function(){

    return restClient.newOrder({amount:1,
                         price:1,
                         side:"sell",
                         symbol:"btcusd",
                         options:["immediate-or-cancel"]})


  },

  bitcoinPrice:function(){
    return restClient.getTicker("btcusd");

  }

}
