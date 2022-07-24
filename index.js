/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBox = document.getElementById("input-box");
const convertBtn = document.getElementById("convert-btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
var renderUnits = document.getElementById("render-units")


const meterToFeet =  3.281
const literToGallon =  0.264
const gallonToLiter = 3.785
const kiloToPound =  2.204



convertBtn.addEventListener("click", function() {
    let input = inputBox.value;
    if (!input) {
        alert("Enter a value");
        renderUnits.style.visibility='hidden';
    }
    renderUnits.style.visibility='visible';
    
        length.textContent = `${input} meters = ${(input * meterToFeet).toFixed(3)} feet | ${input} feet = ${(input / meterToFeet).toFixed(3)} meters`;
        volume.textContent = `${input} liters = ${(input * literToGallon).toFixed(3)} gallons | ${input} gallons = ${(gallonToLiter * input).toFixed(3)} liters`;
        mass.textContent = `${input} kilos = ${(input * kiloToPound).toFixed(3)} pounds | ${input} pounds = ${(input / kiloToPound).toFixed(3)} kilos`;
   
})


