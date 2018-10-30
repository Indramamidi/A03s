$("#submit").click(function () {
    let weight = $("#weight").value ? $("#weight").value : weight
    let height = $("#height").value ? $("#height").value : height
    calculateBmi(weight, height)
    calculateBmi1(weight, height)
});
function justCalculateBMI(weight, height) {
    return Math.round(weight / (height * height))
}
function calculateBmi(weight, height) {
    console.log("Calling calculateBmi with wt="+weight + " and ht=" + height)
    let bmi1 = 0

    let bmi = "Your BMI is:" + Math.round(weight / (height * height))
    let bmifeature = ""
    bmi1 = bmi.substring(bmi.indexOf(":") + 1)
    console.log(bmi1)
    if (bmi1 < 18) {
        bmifeature = "you are too thin."
    }
    if (bmi1 > 18 && bmi1 < 25) {
        bmifeature = "you are healthy."
    }
    if (bmi1 > 25) {
        bmifeature = "you have overweight."
    }

    if ($("#displayFact") || $("#getbmi")) {
        $("#displayFact").html(bmi)
        $("#getbmi").html(bmifeature)
        console.log(bmifeature);
        console.log(bmi)
    }
    console.log(bmi1)
    return bmi1
}
    // function calculateBmi1(weight,height)
    // {
    //     if($("#displayFact") || $("#getbmi"))
    //     {
    //     let w = parseFloat(weight)
    //     let h = parseFloat(height)
    //     }
    //    return 23
    // }

