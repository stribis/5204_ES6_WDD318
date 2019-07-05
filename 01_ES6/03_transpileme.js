var tahoe = {
    resorts : ["Kirkwood", "Squay", "Alpine", "Heavenly", "Northstar"],
    print: function(delay=1000){

        setTimeout( () => {
            console.log(this.resorts.join(", "))
        }, delay)
    }
}
tahoe.print();
console.log(`The first item in the list is ${tahoe.resorts[0]}`);



// USE BABEL TO TRANSPILE THE CODE