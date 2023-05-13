let forecast = [
    {day: "Monday", sun: true, humidity: 10},
    {day: "Tuesday", sun: false, humidity: 100},
    {day: "Wednesday", sun: false, humidity: 100},
    {day: "Thursday", sun: true, humidity: 25},
    {day: "Friday", sun: false, humidity: 100},
    {day: "Saturday", sun: true, humidity: 15},
    {day: "Sunday", sun: false,humidity: 100}
];
let humid = forecast.map(function (day) {
    return day.humidity
})
//     [];
// for (let i = 0; i <forecast.length; i++) {
//     humid.push(forecast[i].humidity)
// }

let numbers = [5,10,15,20,25]
let triples = numbers.map(function(x) {
    return x*3;
})

let numChallenge = [0,3,6,4,8,2,9,7,3,1,1]
let mappedNums = numChallenge.map(x => x * 3).map(y => y + 1)

let greeting = ["Hi", "Hello", "Hey", "Thanks"];
let shout = greeting.map(greet => greet.toUpperCase())
let hiShout = shout.shift()
let lowerShout = shout.map(yell => yell.toLowerCase())
console.log(hiShout)