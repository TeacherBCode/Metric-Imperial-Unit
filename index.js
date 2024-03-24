/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//Buttons
const inputNum = document.getElementById(("input-num")); 
const convertBtn = document.getElementById(("convert-btn"));

const lengthBox = document.getElementById("length-box");
const volumeBox = document.getElementById("volume-box");
const massBox = document.getElementById("mass-box");

const inputEnter = document.getElementById("input-num");


//Event Listeners 
inputEnter.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        convert();
    }
});

convertBtn.addEventListener("click",convert);

//Convert and Change HTML
function convert(){
    const numVal = Number(inputNum.value);
    
    //Length
    let meterFeet = (numVal * 3.28084).toFixed(3);
    let feetMeter = (numVal * 0.3048).toFixed(3);
    if(numVal == 1){
        lengthBox.innerHTML = `<p>${numVal} Meter = ${meterFeet} Feet <br><br> ${numVal} Foot = ${feetMeter} Meters</p>`;
    }else{
        lengthBox.innerHTML = `<p>${numVal} Meters = ${meterFeet} Feet <br><br> ${numVal} Feet = ${feetMeter} Meters</p>`;    
    }
    
    //Volume
    let literGal = (numVal * 0.264172).toFixed(3);
    let GalLiter = (numVal * 3.78541).toFixed(3);
    if(numVal == 1){
        volumeBox.innerHTML = `<p >${numVal} Liter = ${literGal} Gallons <br><br> ${numVal} Gallon = ${GalLiter} Liters</p>`;
    }else{
        volumeBox.innerHTML = `<p >${numVal} Liters = ${literGal} Gallons <br><br> ${numVal} Gallons = ${GalLiter} Liters</p>`;
    }
    
    
    //Mass
    let kiloPound = (numVal * 2.20462 ).toFixed(3);
    let poundKilo = (numVal * 0.453592).toFixed(3);
    if(numVal ==1){
        massBox.innerHTML = `<p>${numVal} Kilogram = ${kiloPound} Pounds <br><br> ${numVal} Pound = ${poundKilo} Kilograms</p> `;
    }else{
        massBox.innerHTML = `<p>${numVal} Kilograms = ${kiloPound} Pounds <br><br> ${numVal} Pounds = ${poundKilo} Kilograms</p> `;
    }
    
}