function giveTalonsInOrder(patients, orders) {
    const sortedPatients = [];
    for (let i = 0; i < orders.length; i++) {
        const orderId = orders[i];

        for (let j = 0; j < patients.length; j++) {
            if (patients[j].id === orderId) {
                sortedPatients.push(patients[j]);
            }
        }
    }
    return sortedPatients;
}
const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
];

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/