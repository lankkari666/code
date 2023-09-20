function getDateFormat(date, separator = '.') {
    const year = date.getFullYear().toString();
    const month = date.getMonth().toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return `${day}${separator}${month}${separator}${year}.`
}

const date = new Date(2001, 21, 22);
const today = new Date();

console.log('date', getDateFormat(date), 'today', getDateFormat(today));