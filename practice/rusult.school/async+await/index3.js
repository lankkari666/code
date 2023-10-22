const ALBUMS_URL = "https://jsonplaceholder.typicode.com/albums";
const dataContainer = document.querySelector(".data-container");

const toggleLoader = () => {
    const loader = document.querySelector("#loader");
    const isHidden = loader.hasAttribute("hidden");

    if (isHidden) {
        loader.removeAttribute("hidden");
    } else {
        loader.setAttribute("hidden", "")
    }
}

const createAlbum = (text) => {
    const album = document.createElement("li");
    album.textContent = text;

    return album;
}
const renderAlbums = async () => {
    try {
        toggleLoader()
        const responses = await fetch(ALBUMS_URL)
        const albums = await responses.json();
        console.log(responses)
        console.log(albums)
        albums.forEach((album) => {
            const albumHTML = createAlbum(album.title)
            dataContainer.append(albumHTML)
        })

    } catch (error) {
        console.log(error);
    } finally {
        toggleLoader()
    }
}

renderAlbums()