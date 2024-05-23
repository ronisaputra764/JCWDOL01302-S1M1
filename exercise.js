let panjang = 10
let lebar = 7

result = panjang * lebar

console.log(result)

//------------------------

let panjang1 = 10
let lebar1 = 6
let tinggi = 8

let area = panjang1 *lebar1
let volume = area * tinggi

console.log(volume)

//--------------------------

let date1 = new Date("2024-05-21")
let date2 = new Date("2024-05-23")

let result1 = Math.abs(date1 - date2) / (1000 * 60 * 60 * 24)

console.log(result1)

//---------------------------

let days = 400
let years = Math.floor(days / 365)
let daysYearLeft = days % 365
let months = Math.floor(daysYearLeft / 30)
let daysMonthsLeft = daysYearLeft % 30

console.log(`${years} year, ${months} months, ${daysMonthsLeft} days`)

