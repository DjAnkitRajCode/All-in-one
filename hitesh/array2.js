const numbers = ['one','two','three','four','five','six']
const peoples = ['ram','shyam','soham','raj','tintin']
// numbers[1] = 'SOMETHING'
//     console.log(numbers);



// start
// console.log(numbers.shift());
// console.log(numbers);

// numbers.unshift('SOMETHING')
// console.log(numbers);



//end
// console.log("the element to be deleted is: "+ numbers.pop());
// console.log(numbers);

// numbers.push('seven')
// console.log(numbers);



//middle
numbers.splice(2,1,'SOMETHINGS')
console.log(numbers);

peoples.splice(2,2,'john')
console.log(peoples);