// if(false){
//     console.log('I am inside if Block')
// }
// else if(true){
//     console.log('i am inside IF IN CAPS Block')
// }
// else{
//     console.log('notice this part')
// }

var whoIshere = 'abc'

if(whoIshere === 'user'){
    console.log('Greeting message for User')
    console.log('Allow access to view all courses')
}
else if(whoIshere === 'teacher'){
    console.log('Greeting message for TEACHER')
    console.log('Allow access to his course')
}
else{
    console.log('MESSAGE : please verify your email')
    console.log('Send user an email for Verification')
}


// ASSISSEMENT
// Grade Problem
// students marks :
// 10-amazing
// 5-good
// 3-poor 
// 0-fail

let grade = 7

if(grade == 10){
    console.log('Outstanding')
}
else if(grade<=9.9 && grade>=8){
    console.log('very good')
}
else if(grade<8 && grade>=6){
    console.log('good')
}
else if(grade<6 && grade>=4){
    console.log('average')
}
else if(grade<4 && grade>=3.5){
    console.log('poor')
}
else{
    console.log('FAIL!')
}