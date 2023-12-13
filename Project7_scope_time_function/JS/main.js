function Time_function() { //Demonstrates the use of the Time_function() method and an "if statement"
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!"
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "It is evening time!";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

var Y = 15; //Demonstrates a global variable
function Add_numbers_1() {
    document.write(20 + Y +"<br>");
}
function Add_numbers_2() {
    document.write(Y + 100);
}
Add_numbers_1();
Add_numbers_2();

function Local_function_1() { //Demonstrates a local variable
    var X = 10;
    document.write(20 + X + "<br>");
}
function Local_function_2() { //Demonstrates the use of console.log to de-bug the code using chrome dev tools
    console.log(X + 100);
}
Local_function_1();
Local_function_2();