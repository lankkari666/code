const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos/";
const dataContainer = document.querySelector('#data-container');

const createPhoto = (photo) => {
    const photoItem = document.createElement('li');
    photoItem.classList.add('photo-item');
    const img = document.createElement('img');
    img.classList.add('photo-item__image');
    img.src = photo.url;
    const title = document.createElement('h3');
    title.classList.add('photo-item__title');
    title.innerText = photo.title;
    photoItem.appendChild(img);
    photoItem.appendChild(title);

    return photoItem;
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

const getFastestLoadedPhoto = (ids) => {
    toggleLoader();
    const requests = ids.map((id) => fetch(`${PHOTOS_URL}/${id}`));

    Promise.race(requests)
        .then((response) => {
            console.log(response)
            return response.json();
        })
        .then((photo) => {
            console.log(photo)
            const photoHTML = createPhoto(photo);
            dataContainer.appendChild(photoHTML);
        })
        .catch((error) => {
            console.error('An error occurred while loading the photo:', error);
        })
        .finally(() => {
            toggleLoader();
        });
}

getFastestLoadedPhoto([60, 12, 55]);
