// Two ways to declare arrays: 
//1.
var fruits =  ['Pine Apple', 'Papaya', 'Guava'];
//console.log(fruits)
//2.
var fruits = new Array('Pine Apple', 'Papaya', 'Guava');
//console.log(fruits)


//---------------------------------------------------------------------------------------------------//
// Two ways to ADD elements in a array : push -> adds to the LAST index, 
//                                       unshift-> adds at the FIRST index
var animals = ["cat","dog"];
animals.push("Tiger");
animals.unshift("Ant");
//console.log(animals);

// Two ways to REMOVE elements in a array : pop -> adds to the LAST index, 
//                                          shift-> adds at the FIRST index

var animals = [ 'Ant', 'cat', 'dog', 'Tiger' ];
var pop = animals.pop();
console.log(pop);

var shift = animals.shift();
console.log(shift);

console.log(animals);
