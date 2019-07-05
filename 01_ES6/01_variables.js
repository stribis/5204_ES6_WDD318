/* Declaring variables post ES6 */

// Declaring a variable before ES6 was simply done withe the var keyword
// Now we have different options to help us with scope

/* * * * CONST * * * */

// A constant is a variable that cannot be changed

// Before:
var pizza = true;
pizza = false;
console.log(pizza); 
// Result is false

// Now

const pie = true;
//pie = false;
console.log(pie);

// Gives out a TypeError:
// Assignment to constant variable.

/* * * * LET * * * */

// Lexical variable scoping, a variable with scope

// old 
var topic = "Javascript";

if( topic ) {
    var topic = "PHP"
    console.log('Block', topic)
}
console.log( 'Global', topic)

// The content inside the if block will reset the value of topic, regardless of the scope

// new
let flavour = "Vanilla";

if (flavour) {
    let flavour = "Caramel";
    console.log( 'Block' , flavour);
}
console.log('Global', flavour);

// With let the content inside the if block is scoped and will only apply to the the block



