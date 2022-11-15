//after defined time, function is called - setTimeout
// setTimeout((name)=>{
//     console.log(name);
// },3000,"joyce");


//after every defined interval, this function is called every time - Set Interval

var fruits = ["apple", "orange"];
var i=0;

var callOutFruits = setInterval(()=>{
       if(fruits.length <= i){
        clearInterval(callOutFruits);
       }else{
            console.log("Fruits",fruits[i]);
            i++;
       }
    },5000)
   

