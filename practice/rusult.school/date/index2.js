function convertMsToDays(milliseconds) {
    const totalMilliseconds = 1000 * 60 * 60 * 24;

    return days = Math.round(milliseconds / totalMilliseconds);
}

function getDaysBeforeBirthday(nextBirthdayDate) {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), nextBirthdayDate.getMonth(), nextBirthdayDate.getDate());

    if (nextBirthday < today) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const timeDifference = nextBirthday.getTime() - today.getTime();

    return daysBeforeBirthday = convertMsToDays(timeDifference);

}

const birthdayDate = new Date(1996, 2, 22);

console.log(getDaysBeforeBirthday(birthdayDate));