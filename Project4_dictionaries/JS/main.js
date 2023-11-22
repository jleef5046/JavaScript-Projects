function my_Dictionary() {
    var Motorcycle = {
        Make: "Kawasaki",
        Model: "Ninja 400",
        Year: "2023",
        Color: "White",
        CubicCapacity: "399cc",
        Price: "$5,899"
    }; // My dictionary with KVP's
    delete Motorcycle.Model; //A statment that deletes the KVP before display
    document.getElementById("Dictionary").innerHTML = Motorcycle.Model; 
}