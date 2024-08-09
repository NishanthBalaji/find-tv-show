const input = document.querySelector('input');
const button = document.querySelector('button');
const display = document.querySelector('#display');

input.addEventListener('input', async function (e) {
    if (input.value.length > 2) {
        console.log(input.value);
        const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${input.value}`);
        console.log(result.data[0].show.image.medium);
    }
})