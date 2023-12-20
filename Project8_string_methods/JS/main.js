function full_Sentence() { //Demonstrates the use of the Concat() method
    var part_1 = "I'm not ";
    var part_2 = "weird! ";
    var part_3 = "I am ";
    var part_4 = "limited edition!";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {  //Demonstrates the use of the Slice() method
    var Sentence = "Gator needs his gat, you punk-ass-bitch!";
    var Section = Sentence.slice(25, 29);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {  //Demonstrates the use of the toString() method
    var Y = 123;
    document.getElementById("Numbers_to_string").innerHTML = Y.toString();
}

function precision_Method() {  //Demonstrates the use of the toPrecision() method
    var T = 40651.7583983500349;
    document.getElementById("Precision").innerHTML = T.toPrecision(8);
}