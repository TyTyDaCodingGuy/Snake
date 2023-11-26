let fullName;
let firstName;
let lastName;

fullName = window.prompt("Please enter your FIRST AND LAST name! Seperate them with ONE space");

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

document.getElementById("first").innerHTML = firstName;
document.getElementById("last").innerHTML = lastName;