//1. object literal
var fruits = new Object();
console.log(fruits);
//2.Constructor -> 1. constructor function, 2. create object with constructor function
// "n" number of objects can be created using constructor function
function fruit(name,rate,season) {
    this.Name = name;
    this.Rate = rate;
    this.Season = season;
}

var appleFruitsProperties = new fruit("apple",30,"24*7");
console.log(appleFruitsProperties);
console.log(appleFruitsProperties.Rate);

var pineAppleFruitsProperties = new fruit("pine apple",10,"winter");
console.log(pineAppleFruitsProperties);
console.log(pineAppleFruitsProperties.Rate);

//3.Object.create() have a object first. We can create a replica or have same structure
var fruitProperties = {
    "Name":"XYZ",
    "Rate":20
}
var custardApple = Object.create(fruitProperties,{
    Name : {
        value : "custard apple"
    }
})
var apple = Object.create(fruitProperties);
console.log("apple",apple)
console.log("custardApple",custardApple)