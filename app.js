const form = document.querySelector('#form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const display = document.querySelector('#display');
let count = 0;

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    if (count > 0) {
        deleteImg();
    }
    console.log('outside loop');
    const query = input.value;
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
    appendImg(result.data);
    input.value = ' ';

})

const appendImg = (shows) => {
    count++;
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

function deleteImg() {
    let imgList = document.querySelectorAll('img');
    for (let i = 0; i < imgList.length; i++) {
        imgList[i].remove();
    }
}
