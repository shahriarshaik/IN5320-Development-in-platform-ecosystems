const minutesInHour = 60
const minutesInDay = 1440

const minutesToDaysHoursMinutes = m => {
    const days = Math.floor(m/minutesInDay)
    m = m - (days * minutesInDay)
    console.log('resterende minutter: ' + m);
    const hours = Math.floor(m/minutesInHour)
    m = m - (hours * minutesInHour)
    const minutes = m

    return {
        days: days,
        hours: hours,
        minutes: minutes,
    }
}


console.log(minutesToDaysHoursMinutes(60))
console.log(minutesToDaysHoursMinutes(90))
console.log(minutesToDaysHoursMinutes(560))
console.log(minutesToDaysHoursMinutes(2634))
console.log(minutesToDaysHoursMinutes(1051408))


/*shittt works welll */ 