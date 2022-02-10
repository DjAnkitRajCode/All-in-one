var request = require('request');

console.log("sunset in purnea");
request('http://api.openweathermap.org/data/2.5/weather?q=purnia,india&appid=9e24d6c77f1df79916858a68e578c480',function(error, response, body){
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData["sys"]);
    }
});