const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const clickBtn = document.getElementById("btn");
clickBtn.addEventListener('click', function(){
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomColor()];        
    }

    const colorValue = document.querySelector(".color");
    colorValue.textContent = hexColor;

    document.body.style.backgroundColor = hexColor;
});

function getRandomColor(){
    return Math.floor(Math.random()*hex.length);
}

