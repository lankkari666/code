const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const createUser = (text) => {
	const user = document.createElement("li");
	const userAnchor = document.createElement("a");
	userAnchor.href = "#";
	userAnchor.textContent = text;
	user.append(userAnchor);

	return user;
}

const dataContainer = document.querySelector("#data-container");

const toggleLoader = () => {
	const loader = document.querySelector("#loader");
	const isHidden = loader.hasAttribute("hidden");

	if (isHidden) {
		loader.removeAttribute("hidden");
	}
	else {
		loader.setAttribute("hidden","")
	}
}

const getAllUsers = () => {
	toggleLoader();
	const result = fetch(USERS_URL);
	result
		.then((res) => {
			if (!res.ok) {
				throw new Error("Ошибка")
			}
			return res.json();
		})
		.then((users) => {
			users.forEach((user) => {
				const userHTML = createUser(user.name);
				dataContainer.append(userHTML);
			})
		})
		.catch((error) => {
			console.log("error", error);
		})
		.finally(() => {
			toggleLoader();
		});
};

getAllUsers();