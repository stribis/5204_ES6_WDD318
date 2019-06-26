// With ES6 you can setup default parameters for functions.
// They look like this:

function logActivity( name="Princess Zelda", activity="Archery") {
    console.log( `${name} loves ${activity}`);
}
logActivity("Super Mario", "Jumping")


// They can be any type, not only strings
// We could, for example, add an entire object as a default parameter

let defaultPerson = {
    name:{
        first: "Princess",
        last: "Zelda"
    },
    activity: "Archery"
}

function logActivity2( p = defaultPerson) {
    console.log( `${p.name.first} ${p.name.last} loves ${p.activity}`);
}