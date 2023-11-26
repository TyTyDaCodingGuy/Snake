let count = 0;
let power = 1;

document.getElementById("power1").onclick = function(){
    power=1;
}

document.getElementById("power10").onclick = function(){
    power=10;
}

document.getElementById("power100").onclick = function(){
    power=100;
}

document.getElementById("power1000").onclick = function(){
    power=1000;
}

document.getElementById("decreaseBtn").onclick = function(){
    count-=1*power;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    power=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1*power;
    document.getElementById("countLabel").innerHTML = count;
}