function addDays(date, days) {
    let timestamp = date.getTime();
    days = days * 24 * 60 * 60 * 1000;
    return newDate = new Date(timestamp + days);
}

const nextDate = new Date();

console.log(addDays(nextDate, 5));