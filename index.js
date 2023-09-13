
var w = parseInt(document.querySelector(".w").value);

var h = parseInt(document.querySelector(".h").value);

var inputcontainer = document.querySelector(".container1");

var resultcontainer = document.querySelector(".container2");

var result = document.querySelector(".calculate");

var resultbmi = document.querySelector(".resultbmi");

var weight = document.querySelector(".w").value;
var height = document.querySelector(".h").value;


function validate(weight,height) {

    // to define only for this block , use 'let' then dont pass elements inside() 
    // let weight = document.querySelector(".w").value;
    // let height = document.querySelector(".h").value;


    if (weight=="" || height=="") {
        alert("Please input your Height and Weight");
    
        
    } else{
        bmiCalculator();
    }
    
};

function bmiCalculator(w,h) {

    var w = document.querySelector(".w").value;

    var h = document.querySelector(".h").value;

    var bmi = w/(Math.pow(h,2));
    bmi = (bmi*10000);
    bmi = bmi.toFixed(1);
    
    
    resultbmi.innerHTML = bmi;
    status(bmi);


}
result.addEventListener("click", function(){

    resultcontainer.classList.remove("hidden");
    inputcontainer.classList.add("hide");

});

function status (bmi) {
    let health = document.querySelector(".status");
    let back = document.querySelector(".wrapper");

    if (bmi<18.4) {
        health.innerHTML= "Underweight";
        back.style.backgroundColor = " hsl(217, 89%, 42%, 0.3)";
        
    } else if(bmi>=18.4 && bmi<=24.9) {
        health.innerHTML= "Normal Weight";
        back.style.backgroundColor = " hsl(125, 100%, 51%,0.3)";
        
    }
    else if(bmi>=25 && bmi<=29.9) {
        health.innerHTML= "Overweight";
        back.style.backgroundColor = " hsl(345, 100%, 78%,0.3)";
        
    }
    else if(bmi>=30 && bmi<=34.9) {
        health.innerHTML= "Obesity";
        back.style.backgroundColor = "   hsl(0, 100%, 50%, 0.3)";
        
    }
    else if(bmi>=35 && bmi<=39.9) {
        health.innerHTML= "Extreme Obesity";
        back.style.backgroundColor = "   hsl(0, 100%, 34%, 0.3)";
        
    }else {
        health.innerHTML= "Worsen Obesity";
    }
}


    

