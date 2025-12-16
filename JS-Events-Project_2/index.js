const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;
    let results = document.querySelector("#results");
    
    if (height === " " || height <= 0 || isNaN(height)) {
        results.style.color = "red";
        results.textContent = "please enter a valid height";
    } else if (weight === " " || weight <= 0 || isNaN(weight)) {
        results.style.color = "red";
        results.textContent = "please enter a valid weight";
    }
    else {
        results.style.color = "blue";
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi < 18.6) {
            results.innerHTML = ` BMI : ${bmi} <br> Your under weight!`
        } else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = ` BMI : ${bmi} <br> Your weight is Normal!`
        } else {
            results.innerHTML = ` BMI : ${bmi}<br> Your over weight!`
        }
    }
    // results.style.color = "blue"
    results.textContent = bmi;

})