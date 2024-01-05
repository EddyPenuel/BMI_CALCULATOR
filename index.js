

// declaring variables 
const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

// function creation
function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    // calculate bmi value
    const bmiValue = weightValue / ( heightValue * heightValue);
    
    // assigning weight result to bmi value
    bmiInputEl.value = bmiValue;

    // if condiitoio
    if (bmiValue < 18.5) {
        weightConditionEl.innerText = "Under Weight";
    } else if ( bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerText = "Normal Weight"
    } else if ( bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerText =" Over Weight";
    } else if (bmiValue >= 30) {
        weightConditionEl.innerText = " Obesity";
    }
}

// response to mouse click on button
btnEl.addEventListener("click", calculateBMI);