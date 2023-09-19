const goals = [8, 1, 1, 3, 2, -1, 5];

const maxGoals = goals.find(item => item > 1)
const indexOfMaxGoals = goals.indexOf(maxGoals)

alert(`Самый результативный матч был под номером ${indexOfMaxGoals + 1}. В нем было забито ${maxGoals} гол(ов).`)

const minGoals = Math.min(...goals.filter(goal => goal >= 0));
const minIndexes = goals.reduce((acc, goal, index) => {
    if (goal === minGoals) {
        acc.push(index + 1);
    }
    return acc;
}, []);

alert(`Самые нерезультативные матчи были под номерами ${minIndexes.join(", ")}. В каждом из них было забито по ${minGoals} мячу(а).`);

const totalGoals = goals.reduce((acc, goal) => {
    if (goal >= 0) {
        acc += goal;
    }
    return acc;
}, 0);
alert(`Общее количество голов за сезон равно ${totalGoals}`);

const hasAutoDefeat = goals.some(goal => goal < 0);
if (hasAutoDefeat) {
    alert("Были автоматические поражения: да");
} else {
    alert("Были автоматические поражения: нет");
}

const playedMatches = goals.filter(goal => goal >= 0).length;
const averageGoals = totalGoals / playedMatches;
alert(`Среднее количество голов за матч равно ${averageGoals}`);

const sortedGoals = [...goals].sort((a, b) => a - b);
const sortedGoalsString = sortedGoals.map(goal => String(goal)).join(", ");
alert(sortedGoalsString);