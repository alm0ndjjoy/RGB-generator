// grab elements
const body = document.getElementById("bg");

const rgb = document.getElementById("rgb");

//generates a random number from 0-255
function randomizer (){
    const random = Math.floor((Math.random()*255) + 1 );
    return random;
}

//sets rgb
function rgbNum(){
    const r = randomizer();
    const b = randomizer();
    const g = randomizer();
    body.style.backgroundColor = `rgb(${r},${g},${b})`;
    rgb.textContent = `rgb(${r},${g},${b})`;
}
