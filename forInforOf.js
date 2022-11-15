//for in -> iterate through the indices (in-index)
//for of -> iterate through the values (of - element in an array)

var array = ["Apples", "Bananas", "Chips", "Corners", "Corn"];
for (var i in array) {
    console.log(array[i]);
}
console.log("----------------------------------");
var string = "Joyce";
for (var i in string) {
    console.log(string[i]);
}
console.log("----------------------------------");
var object = {"Pen": 20,"Watch": 30,"Box": 40,"Button": 50};
for (var key in object) {
    console.log(key+"---"+object[key]);
}