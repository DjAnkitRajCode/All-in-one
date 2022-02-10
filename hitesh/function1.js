let sayHello = function (name){
    console.log(`greeting message for ${name}`);
    console.log(`hey ${name}`);
}

//sayHello('john')



let fullNameMaker = function(firstname, lastname){
    console.log('welcome to LCO');
    console.log(`HAPPY TO HAVE YOU, ${firstname} ${lastname}`)
}

//fullNameMaker('jhon','Doe')

let myAdder = function(num1, num2){
    let added = num1 +num2
    return added 
}

// different way of getting result
//type1
// result = myAdder(3,5)
// console.log(result);
// console.log(myAdder(3,5));

//Reduce line by giving return value in one line
let myMultiplier = function(num1,num2){
    return num1 * num2
}

// result = myMultiplier(3,5)
// console.log(result);



//learning Default parameter in javascript:
let guestUser = function(name = 'UnName',courseCount =0){
    return 'Hello ' + name + ' and your course count is ' + courseCount 
}
console.log(guestUser('john',1));

