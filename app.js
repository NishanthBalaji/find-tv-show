const form = document.querySelector('#form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const display = document.querySelector('#display');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const query = input.value;
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
    appendImg(result.data);

})

const appendImg = (shows) => {
    console.log(shows);
    for (let res of shows) {
        if (res.show.image) {
            const img = document.createElement('IMG');
            img.src = res.show.image.medium;
            display.style.visibility = "unset";
            display.append(img);
        }

    }
}