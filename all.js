/* console.log('I like PIZZA');
console.log('Its really good!');

//This is a comment

//NEW SECTION STUFF

let firstName = "Tyler"; //strings
let age = 21; //numbers
let student = true; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
*/

//NEW SECTION VAR MATH

/*

let students = 20;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
let exteraStudents = students % 3;

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;

console.log(students);

*/

//NEW SECTION USER INPUT

//let username = window.prompt("Please enter your username");

//console.log(username);

/*

let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username)
    document.getElementById("myLabel").innerHTML = username
};

*/

//NEW SECTION MATH

/*
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;

//x = Math.round(x); RND
//x = Math.floor(x); RND DOWN
//x = Math.ceil(x); RND UP
//x = Math.pow(x, 2); EXPONENT
//x = Math.sqrt(x); SQUAREROOT
//x = Math.abs(x); ABSOLUTE VALUE
//maximum = Math.max(x, y, z); GIVES LARGEST NUMBER
//minimum = Math.min(x, y, z); GIVES SMALLEST NUMBER
//x = Math.PI; PI

console.log(x);

*/

//NEW SECTION POTHAG THRM



let a;
let b;
let c;

/*

a = window.prompt("Enter side A");

a = Number(a);

b = window.prompt("Enter side B");

b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log(a);
console.log(b);
console.log(c);

*/

/*

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    b = document.getElementById("bTextBox").value;
    a = Number(a);
    b = Number(b);
    console.log(a, b);
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabelAns").innerHTML = c
    console.log(c)
};

*/

//NEW SECTION RNG

/*

let d = 6;

document.getElementById("6").onclick = function(){
    let d = 6;
}

document.getElementById("7").onclick = function(){
    let d = 7;
}

document.getElementById("8").onclick = function(){
    let d = 8;
}

document.getElementById("9").onclick = function(){
    let d = 9;
}

document.getElementById("10").onclick = function(){
    let d = 10;
}

document.getElementById("11").onclick = function(){
    let d = 11;
}

document.getElementById("12").onclick = function(){
    let d = 12;
}

document.getElementById("13").onclick = function(){
    let d = 13;
}

document.getElementById("14").onclick = function(){
    let d = 14;
}

document.getElementById("15").onclick = function(){
    let d = 15;
}

document.getElementById("16").onclick = function(){
    let d = 16;
}

document.getElementById("17").onclick = function(){
    let d = 17;
}

document.getElementById("18").onclick = function(){
    let d = 18;
}

document.getElementById("19").onclick = function(){
    let d = 19;
}

document.getElementById("20").onclick = function(){
    let d = 20;
}

document.getElementById("21").onclick = function(){
    let d = 21;
}

document.getElementById("22").onclick = function(){
    let d = 22;
}

document.getElementById("23").onclick = function(){
    let d = 23;
}

document.getElementById("24").onclick = function(){
    let d = 24;
}

document.getElementById("25").onclick = function(){
    let d = 25;
}

document.getElementById("rng").onclick = function(){
    let d = Math.floor(Math.random() * d) + 1;
    document.getElementById("rn").innerHTML = d;
    console.log(d);
}

*/

//NEW SECTION USEFUL STRING STUFF

/*

let userName = "   Tyler Sullivan   ";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf(S));
console.log(userName.lastIndexOf(S));
console.log(userName);
userName = userName.trim();
userName = userName.toUpperCase;
userName = userName.toLowerCase;
phoneNumber = phoneNumber.replaceAll("-", "/");

*/

//NEW SECTION STRING EXTRACTION

/*

let fullName = "Tyler Sullivan";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "))
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

*/

//NEW SECTION METHOD CHAINING

/*

let name = "tyler";
let letter = name.charAt(0).toUpperCase();

name = letter + name.slice(1);

console.log(name);

*/

//NEW SECTION IF STATEMENTS

let age = 21;

if(age >= 18){
    console.log("You are an adult!");
}
else{
    console.log("You are a child!");
};
