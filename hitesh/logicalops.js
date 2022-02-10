// && -AND Operator
// || -OR Operator

let isVerified = true
let isLOggedIN = true
let hasPaymentToken = true
let isGuest = true


if(isVerified && isLOggedIN && hasPaymentToken){
    console.log('Greeting message to user')
    console.log('Grant acess to paid course')
}
else if(isVerified || isGuest){
    console.log('Allow free previews')
}
else{
    console.log('MESSAGE: Please contact admin')
}