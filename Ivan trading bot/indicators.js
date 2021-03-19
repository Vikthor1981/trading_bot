const CCAPIKey = "551639c4572f4d251d15d92936f3bbbe713c93dbd567681849ded2cfbcabb498"
const CryptoCompareAPI = require("cryptocompare");
CryptoCompareAPI.setApiKey(CCAPIKey);


module.export = {

  hourlyMovingAverage:function(cryptoAsset,fiatCurrency,hours,callback){

    if(hours>169){
      console.error("Only 169 allowed!")
      return
    }

    // 1 get data from CC
    CryptoCompareAPI.histoHour(cryptoAsset, fiatCurrency)
    .then(data => {
      // 2 caculate MA from 100 past hours
      data = data.reverse()
      var sum = 0;
      for(var i = 0;i<hours;i++){
        sum+=data[i].close;
      }

      var movingAverage = Math.floor(sum/hours);
      callback(movingAverage);

    })
    .catch(console.error)

  }

}



// 3 check continously if price is crossing MA
