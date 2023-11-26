let name = window.prompt("Enter your name in all lowercase letters");
let letter = name.charAt(0).toUpperCase();

name = letter + name.slice(1);

console.log(name);

document.getElementById("namecap").innerHTML = name