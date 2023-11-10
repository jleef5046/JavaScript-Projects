function My_First_Function () { //The name of my function
    var A = "This is the button text", B = "This is the other button text"; //This represents two possible varibles that may be displayed
    document.getElementById("Button_Text").innerHTML = A; //Method used
}

function My_Second_Function() { //The name of my function
    var string1 = "Learning new things"; //The two strings I will concatenate
    string1 += " is a lot of fun!";
    document.getElementById("Concatenate").innerHTML = string1; //Method used
}