const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const getTodosByIds = async (ids) => {
    try {
        const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
        const responses = await Promise.all(requests);
        const dataResults = await Promise.all(responses.map((response) => response.json()));
        console.log(dataResults);
    } catch (error) {
        console.log(error);
    }
};
getTodosByIds([43, 21, 55, 100, 10]);