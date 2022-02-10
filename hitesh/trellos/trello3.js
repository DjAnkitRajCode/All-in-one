let  myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
// when you are using same variable in object the it may not work for make it work use 'this' parameter
    addMeeting: function(num){
        this.meetings = this.meetings + num
    },

    addMeetDone: function(num2){
        this.meetDone = this.meetDone - num2
    },

    summary: function(){
        this.meetLeft = this.meetings + this.meetDone
        return `You Have ${this.meetLeft} meetings today!`
    }
}

myTodos.addMeeting(4)
myTodos.addMeetDone(3)
console.log(myTodos.summary());


// <--Example-->


// let  myTodos2 = {
//     day: 'Tuesday',
//     meetings: 2,
//     meetDone: 3,

//     addMeeting: function(){
//         console.log(this)
//     }
// }
// myTodos2.addMeeting()


// <--Assigment-->
//handle meeting done
//create the function that can reset entire day
