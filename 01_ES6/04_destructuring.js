// We can use destructuring to take objects apart creating variables using they key value pairs

let sandwich = {
    bread: "plain italian",
    meat: "pulled pork",
    cheese: "chedar",
    toppings: ["lettuce", "tomato", "Cucumber"]
}
// In this case we want to extract the bread and meat keys out of the sandwich object
// the key name will be the variable name and the value will be the value of variable
let {bread, meat} = sandwich;


// Code will now work outside of the sandwich scope 
// no need to type sandwich.bread...
console.log(bread, meat);

bread = "Bimbo";
meat = "Beef";

// We can change bread and meat now
console.log(bread, meat);
// the object is not affected by changes made to the extracted values
console.log(sandwich.bread, sandwich.meat);