var request = require('request');
request('http://www.googledfvkj.com',function(error,response,body){
    if(error){
        console.log("SOmething went worng!");
        console.log(error);
    }
    else{
        if(response.statusCode == 200){
            //THINGS WORK!
            console.log(body)
        }
    }
});