
function calculateBMI(){  
    
    let weightInput= prompt("Enter your weight in KG");
    let heightInput = prompt("Enter your height");
    
    let weight = parseFloat(weightInput);
    let heightcm = parseFloat(heightInput);

    let height = heightcm/100;

    let bmiScore= weight/ (height * height);
    bmiScore = bmiScore.toFixed(2);

    document.getElementById("BmiScore").innerText = `Your BMI score ${bmiScore}`

    let category;

    if(bmiScore<18.5)
    {
        category = "Underweight";
    }
    else if(bmiScore < 25)
    {
        category = "Normal Weight";
    }
    else if(bmiScore < 30)
    {
        category = "OverWeight";
    }
    else
    {
        category = "Obese";
    }

    document.getElementById("category").innerText = `Your category is ${category}`
}
