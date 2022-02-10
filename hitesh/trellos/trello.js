//How 'ForEach' Loop works:-

// const days =['MON','TUES','WED','THRUS','FRI','SAT']

// let sayHello = function(){
//     console.log("Greeting Message For User");
// }

// days.forEach(sayHello)



// <--sepration--> 



const days =['MON','TUES','WED','THRUS','FRI','SAT']
//in function(1st on is always its ELEMENT and 2nd one is always its INDEX)
days.forEach(function(day,index){
    console.log(`starts with ${index+1} -- ${day}`)
})

//<--HOMEWORK-->

const months =['JAN','FEB','MARCH','ARPIL','MAY','JUNE','JULY','AUG','SEPT','OCT','NOV','DEC']
months.forEach(function(months_name,index){
    console.log(` month ${index+1} is ${months_name}`)
})
