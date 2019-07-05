// Restructuring is not actually called restructuring, it is called Object Literal Enhancement
// Object Literal Enhancement does the oposite of destructuring
// We can grab variables from the global scope and turn them into an object

let name = "Colombia";
let capital = "Bogota";

//let country = {name, capital}
//console.log(country)

// This also work with object methods:

var completeName = function(){
    // We can use this. as if we were inside an object
    console.log(`${this.capital} is the capital of ${this.name}`);
}

let country = {name, capital, completeName}
console.log(country)
console.log(country.completeName());