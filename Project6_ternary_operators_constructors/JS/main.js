function nestedFunction() { //Demonstrates a nested function
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}

function Vote_Function() { //Demonstrates the use of Ternary Operators
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Motorcycle(Make, Model, Year, CCs) { //Demonstrates a constructor function using "new" and "this"
    this.Motorcycle_Make = Make;
    this.Motorcycle_Model = Model;
    this.Motorcycle_Year = Year;
    this.Motorcycle_CCs= CCs;
}
var Boston = new Motorcycle("Honda", "Rebel", 2020, 471);
var Theo = new Motorcycle("Yamaha", "R3", 2022, 321);
var Joshua = new Motorcycle("Kawasaki", "Ninja400", 2023, 399);
function wheelsFunction() {
    document.getElementById("Bikes").innerHTML = 
    "Joshua rides a " + Joshua.Motorcycle_Make + " " + Joshua.Motorcycle_Model + " manufactured in "
    + Joshua.Motorcycle_Year + ", and it is " + Joshua.Motorcycle_CCs + "CCs.";
}
