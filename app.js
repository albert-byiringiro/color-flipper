const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color")

btn.addEventListener("click", () => {
    //  get random number btn 0-3

    const randomNumber = getRandom();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}