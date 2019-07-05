// The spread operator
/* ... */ 

//   ------------------ 1. Combining the content of arrays :  ------------------//

var saCountries = ['Colombia', 'Venezuela', 'Bolivia'];
var euCountries = ['Germany', 'Austria', 'Italy'];

var allCountries = [...saCountries, ...euCountries];
// This makes a new array combining the items of both arrays
//console.log(allCountries)

//  ------------------ 2. In practice  ------------------ //

// BEFORE : The array was mutated

var fruits = ['apple', 'banana', 'pear'];
var [last] = fruits.reverse();
console.group();
// yes you can get the last item in the array
console.log(last);
// but when we console.log fruits, then you can see it has mutated.
console.log(fruits);
console.groupEnd()
// AFTER : spread allows us to get last without mutation

var vegies = ['carrot', 'lettuce', 'spinach'];
var [end] = [...vegies].reverse();
console.group();
// You can still get the last item of the array, this time using the ... operator
console.log(end);
// but when we console.log, now the array won't change/mutate
console.log(vegies);
console.groupEnd()

//   ------------------ 3. First/Rest  ------------------ //
// Other items in the array can also be obtained with the spread operator

var cities = ['new york', 'los angeles', 'miami'];
var [first, ...rest] = cities;

console.log(rest.join(" || "))

//   ------------------ 4. n number of arguements   ------------------//

function directions(...args) {
    var [start, ...remaining] = args;
    var [finish, ...stops] = remaining.reverse();
    console.group();
    console.log(`drive thorugh ${args.length} towns`);
    console.log(`starts in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
    console.groupEnd()
}

directions(
    "Truckee",
    "Tahoe",
    "Sunnyside",
    "Homewood",
    "Tamoa"
)

//Explanation:
/*
    The 'start' variable is assigned the first item in the array,
    The 'finish' variable gets the last item i the array,
    args.length is all the items in the array, which is the number of towns we go through
    stops of course is the remaining - finish, so 3 

*/

//  ------------------ .5 Objects   ------------------ //

// You can also use the spread operator for objects and it works in a similar way as it does with arrays

var morning = {
    breakfast: "oatmeal",
    lunch: "peanut butter and jelly"
}

var dinner = "mac and cheese"

var backpackingMeals = {
    ...morning,
    dinner
}

console.log(backpackingMeals)