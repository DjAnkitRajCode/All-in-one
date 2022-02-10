// const days =['Mon','tues' ,'wed','thrus','fri','sat']

// for(let i=0;i<days.length;i++){
//     console.log(days[i]);
// }
// console.log('<---seprate--->');

// for(let j=days.length-1; j>=0 ; j--){
//     console.log(days[j]);
// }

// console.log(days[0]);

// days.forEach(function(day,index){
//     console.log(`starts with ${index +1} -- ${day}`)
// })

const mytodos =[]

mytodos.push('buy bread')
mytodos.push('record vieedos for youtube')
mytodos.push('go to gym')

mytodos.forEach(function(todo,index){
    console.log(`your task no. ${index +1 } is : ${todo}`);
})