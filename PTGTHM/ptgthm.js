let a;
let b;
let c;

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