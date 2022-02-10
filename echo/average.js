
function average(scores){
    var total = 0;
    scores.forEach(function(scores){
    total += scores;
    });

    //didved by total number of element
    var avg = total / scores.length;


    //round average
    return Math.round(avg);
}
var scores = [90, 98 ,89 ,100 ,100 ,86 ,94];
console.log(average(scores));