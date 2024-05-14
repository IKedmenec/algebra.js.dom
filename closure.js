// Primjer Closure-a

var x = "neka vrijednost";

function vratiNesto (){
var x = "lokalna varijabla";
function f() {
    return x;
}
return f;
}

var y = vratiNesto ()();

console.log(y);
