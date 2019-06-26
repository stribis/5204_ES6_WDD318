// Arrow functions allows us to create functions with a different syntax and without needing to use the function or return keywords


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - -       One Parameter     - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// OLD



var lordify = function(firstName) {
    return firstName + ' of Catenbury';
}
console.log( lordify("Dale"));

// NEW

let lordify = firstName => `${firstName} of Catenbury`;
console.log(lordify("Darel"));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - - - More than one parameter - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// OLD

var lordify = function(firstName, land) {
    return firstName + ' of ' + land;
}

console.log( lordify("Dale", "Maryland"));

// NEW

let lordify = (firstName, land) => `${firstName} of ${land}`;
console.log(lordify("Darel", "Maryland"));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - -  Multiple lines Statement - - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// OLD

var lordify = function(firstName, land) {

    if (!firstName) {
        throw new Error('A first name was not provided');
    }

    if (!land) {
        throw new Error('A land was not provided')
    }

    return firstName + ' of ' + land;
}

console.log( lordify("Dale", "Maryland"));

// NEW

let lordify = (firstName, land) => {
    if (!firstName) {
        throw new Error('A first name was not provided');
    }

    if (!land) {
        throw new Error('A land was not provided')
    }
    return `${firstName} of ${land}`;
}

console.log(lordify("Martin", "Meryland"));


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/* - - - - - - - - - - -  Don't block scope of THIS  - - - - - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


var tahoe = {
    resorts : ["Kirkwood", "Squay", "Alpine", "Heavenly", "Northstar"],
    print: function(delay=1000){

        setTimeout( () => {
            console.log(this.resorts.join(", "))
        }, delay)
    }
}
tahoe.print();

// Changing the print function to an arrow function removes the scope and makes this = window
// Sometimes we need to use normal function to restrict the scope