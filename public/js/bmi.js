$("#submit").click(function () {
        let weight = $("#weight").val()
        let height = $("#height").val()
        calculateBmi(weight,height)
          calculateBmi1(weight,height)
    });
    function calculateBmi(weight,height)
    {
        let bmi = "Your BMI is:" + Math.round(weight / (height * height))
        let bmifeature = ""
        let bmi1 = bmi.substring(bmi.indexOf(":") + 1)
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
        
        $("#displayFact").html(bmi)
        $("#getbmi").html(bmifeature)
        console.log(bmifeature);
        console.log(bmi)

    }
    function calculateBmi1(weight,height)
    {
        let w = parseFloat(weight)
        let h = parseFloat(height)
       return 23
    }

