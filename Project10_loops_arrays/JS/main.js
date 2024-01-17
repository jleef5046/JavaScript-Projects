function Call_Loop() { //Demonstrates a call loop
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //Demonstrates a for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() { //Demonstrates the use of an array
    var Colors = [];
    Colors[0] = "red";
    Colors[1] = "orange";
    Colors[2] = "yellow";
    Colors[3] = "green";
    Colors[4] = "blue";
    Colors[5] = "purple";
    document.getElementById("Array").innerHTML = "My favorite color is " + Colors[3] + "!";
}

function constant_function() { //Demonstrates the use of a constant
    const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

let motorcycle = { //Demonstrates the use of creating an object using the let keyword
    make: "Kawasaki ",
    model: "Ninja 400 ",
    year: "2023 ",
    color: "white ",
    description : function() {
        return "The motorcycle is a " + this.year + this.color + this.make + this.model;
        }
};
document.getElementById("Moto_Object").innerHTML = motorcycle.description();
