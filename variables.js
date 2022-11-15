// Block level scope - var, absent in let and const
// Hoisting - var, absent in let and const


//1. Block level
{
    var name = "joyce";
}
    console.log(name);

//2. Hoisting
    console.log(gender); // no error is thrown rather will print as "undefined"
    var gender = "female";

//3. Once declared can also be redeclared using "var" absent in let and const

    var email = "gj.joyce1@gmail.com";
    var email = "g.joyce36@ymail.com";
    console.log(email);

    const phoneNumber = 8501025883;
    //const phoneNumber = 918501025883;
    console.log(phoneNumber);

    let dob = "Jan 22nd 1994";
    //let dob = "22-01-1994";
    console.log(dob);

    let c;
    c = "bad";
    console.log(c);
