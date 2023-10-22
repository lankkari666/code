const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const dataContainer = document.querySelector('#data-container')
const createUser = (text) => {
    const user = document.createElement("li");
    const userAnchor = document.createElement("a");
    userAnchor.href = "#";
    userAnchor.textContent = text;
    user.append(userAnchor);

    return user;
}

const toggleLoader = () => {
    const loader = document.querySelector("#loader");
    const isHidden = loader.hasAttribute("hidden");

    if (isHidden) {
        loader.removeAttribute("hidden");
    } else {
        loader.setAttribute("hidden", "")
    }
}

const getUsersByIds = (ids) => {
    toggleLoader();
    const requests = ids.map((id) => fetch(`${USERS_URL}/${id}`))
    Promise.all(requests)
        .then((responses) => {
            const responsesData = responses.map((response) => response.json());
            return Promise.all(responsesData);
        })
        .then((users) => {
            console.log(users)
            users.forEach((user) => {
                const userHTML = createUser(user.name);
                dataContainer.append(userHTML);
            })
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            toggleLoader();
        });
}

getUsersByIds([5, 6, 2, 1]);