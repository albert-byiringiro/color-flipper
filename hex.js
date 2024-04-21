const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateColor() {
    const btn = document.getElementById("btn");
    const color = document.querySelector('.color');

    btn.addEventListener('click', () => {
        let hexCode = '#';

        for (let index = 0; index < 6; index++) {
            hexCode += hex[getRandom()];
        }
        document.body.style.backgroundColor = hexCode;
        color.textContent = hexCode;
    })
}


function getRandom() {
    return Math.floor(Math.random() * hex.length);
}

generateColor();