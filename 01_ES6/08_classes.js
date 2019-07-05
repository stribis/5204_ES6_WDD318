// ------------- Classes ------------- //

// Before: There were no classes ... types used to be defined inside functions.
// We had to create a function and the define methods on the function object using the prototype

// BEFORE

/*function Vacation(destination, length) {
    this.destination = destination;
    this.length = length;
}

Vacation.prototype.print = function() {
    console.log(this.destination + " | " + this.length + " days")
}

var maui = new Vacation("Maui" , 7)

maui.print()*/

// ES6 Introduced the class declaration, which works the same way, but has better syntax

// first we create the class
class Vacation {
    constructor(destination, length) {
        this.destination = destination
        this.length = length
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days`)
    }
}

// Now we can use it by creating new instances of the class
const trip = new Vacation("Santiago, Chile", 7)
trip.print()

// we can also extend classes
// the subclass (Expedition) inherits the property of the superclass (Vaction)

class Expedition extends Vacation{
    
    constructor(destination, length, gear) {
        super(destination, length)
        this.gear = gear;
    }

    print() {
        super.print()
        console.log(`Bring your ${this.gear.join(" and your ")}`)
    }

}

newTrip = new Expedition("Mt. Everest", 7, ["coat", "sunblock", "glasses"]);
newTrip.print();

