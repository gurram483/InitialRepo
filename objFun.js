var object ={
    "name": "Joyce",
    "id":"267",
    "laptop": function(cpu,ram,brand){
       return this.name+ram+brand
    }
}

console.log(object.laptop("dd",34,"dsa"));