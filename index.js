const { timeout } = require('cron')
const { job } = require('cron')
const cron = require('node-cron')
// const date = require('date')

let ts = Date.now()

// let date_ob = new Date(ts)

// function stoptask(){}

// current date
// adjust 0 before single digit date
// let date = ("0" + date_ob.getDate()).slice(-2);

// // current month
// let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// // current year
// let year = date_ob.getFullYear();

// // current hours
// let hours = date_ob.getHours();

// // current minutes
// let minutes = date_ob.getMinutes();

// // current seconds
// let seconds = date_ob.getSeconds();

// prints date in YYYY-MM-DD format
// console.log(year + "-" + month + "-" + date);

year = 2022
month = 06
date = 07
hours = 15
minutes = 41
seconds = 50


// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
SavedDate = seconds + " " + minutes + " " + hours + " " + date + " " + month + " " + "*"

console.log(SavedDate)
nulldate = " * * * * * * "

var task = cron.schedule(SavedDate, () => {
    console.log('Started')
    setTimeout(function() {
        task.stop()
    }, 1000);
    
}, {
    scheduled: true
})

// stoptask(task)

// function stoptask(task){
//     task.stop()
//     console.log('Stopped')
    
// }

// prints time in HH:MM format
// console.log(hours + ":" + minutes);
