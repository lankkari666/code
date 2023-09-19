const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

peopleWaiting.shift();
peopleWaiting.shift();

function giveParcel() {
    if (peopleWaiting.length > 0) {
        let receiver = peopleWaiting.shift();
        let remainingReceiver = peopleWaiting.length;
        alert(`${receiver} получил(а) посылку. В очереди осталось ${remainingReceiver} человек.`);
    }
}

giveParcel();

function leaveQueueWithoutParcel() {
    if (peopleWaiting.length > 0) {
        let receiver = peopleWaiting.shift();
        alert(`${receiver} не получил(а) посылку и ушел(ла) из очереди.`);
    }
}

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel();
}