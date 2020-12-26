const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    const colorVal = getRandomColor();

    const colorElement = document.querySelector(".color");
    colorElement.textContent = colors[colorVal];
    document.body.style.backgroundColor = colors[colorVal];

});

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}
