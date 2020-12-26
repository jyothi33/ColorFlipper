const clickButton = document.getElementById("btn");

//Adding click event listenser which executes onclick of Click Me button.
clickButton.addEventListener('click',function(){
    //Invoke getRandomRGBColor() function.
    const rgbcolor = getRandomRGBColor();

    const rgbValue  = document.querySelector(".color");

    //Replace the background color values displayed on screen.
    rgbValue.textContent = rgbcolor;
    //Update the background color of body with the new value.
    document.body.style.backgroundColor = rgbcolor;
});

//Create a function which returns the rgb value in the format rgb(99,130,255);
function getRandomRGBColor(){
    let startRgb = "rgb(";
    let endRgb = ")";
    let rgbValue;
    let rgbReturnString;
 
    for (let i = 0; i < 3; i++) {
        //Multiply by 256 because rgb can contain values from 0 to 255. Math.random() returns values from 0 to 1 and not 1. So multiplying by 256 will return values within 256.
        rgbValue = Math.floor(Math.random() * 256);

        if(i==0){
            rgbReturnString = startRgb + rgbValue; 
        }
        else if(i==2){
            rgbReturnString += rgbValue+endRgb;
        }
        else{
            rgbReturnString += ","+rgbValue + ",";
        }       
    }
    return rgbReturnString;
}