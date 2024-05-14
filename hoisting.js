// Primjer Hoistinga

var x = 2;
var y = 3;

var z = x + y;

console.log(z);

// Hoisting = stavljanje tj. deklariranje varijabli uvijek na pocetku

function zbroji() {
var n = 3;
let m = 4;

console.log("1. n=" + n);

console.log("2. n=" + n);

console.log(n + m);

}

zbroji();
