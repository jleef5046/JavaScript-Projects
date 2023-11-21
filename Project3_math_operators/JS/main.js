function Math_Function() {
    var simple_Math = (1+2) * 10 / 2-5;
    document.getElementById("Math").innerHTML = "(1+2) * 10 / 2-5 = " + simple_Math; //This will demonstrate the uses of multiple operations in one function
}

function Percentage() {
    var num1 = 150;
    var num2 = 35;
    var percent = ((num2 / num1) * 100).toFixed(1);
    document.getElementById("Math2").innerHTML = "35 is " + percent + "%" + " of 150." //This will produce what the percentage of 35 out of 150 equals

}

function IncreaseAndDecrease() {
    var X = 13;
    var Y = 22;
    X++;
    Y--;
    document.getElementById("Math3").innerHTML = "X is equal to " + X++ + " and Y is equal to " + Y-- + "." //This will demonstrate the increase and decrease of a set number using a the ++ and -- operatiors
}

function Random() {
    window.alert(Math.random() * 100); //This will display a random number between 0 and 100
    
}