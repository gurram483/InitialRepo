// var day = "Monday";
// switch (day){
//     case 'Monday':
//     console.log("7am");
//     break;
// default:
//     console.log("3am");

// }


//assignment:-
var num = 283;
let reverse = "";

while(num>0){
    res = num%10;
    num = parseInt(num/10);
    console.log(res);
    reverse += res;
}

console.log("reverse",reverse);