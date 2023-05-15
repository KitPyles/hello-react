let weather = [72, 84, 34, 56, 92, 24, 47, 85, 72, 54];
// let goOutside = [];
//
// for (let i = 0; i < weather.length; i++) {
//     if (weather[i] >= 70) {
//         goOutside.push(weather[i])
//     }
// }
let goOutside = weather.filter(function(temp) {
    return temp >= 70;
})

let forecast = [
    {day: "Monday", sun: true},
    {day: "Tuesday", sun: false},
    {day: "Wednesday", sun: false},
    {day: "Thursday", sun: true},
    {day: "Friday", sun: false},
    {day: "Saturday", sun: true},
    {day: "Sunday", sun: false}
]
let sunnyDays = forecast.filter(function(day) {
    return day.sun;
})
// for (let i = 0; i < forecast.length; i++) {
//     if (forecast[i].sun) {
//         sunnyDays.push(forecast[i])
//     }
// }
console.log(sunnyDays)