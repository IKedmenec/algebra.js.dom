// Spread Operator

function ispisiImena(prvo, drugo, trece) {
    console.log(prvo);
}

const x = ['Ivan', 'Marija', 'David', 'Jozo'];
ispisiImena(...x);

// Rest operator

/*
function ispisiImena(...imena) {
    console.log(imena);
}

const x1 = ['Ivan', 'Marija', 'David'];

ispisiImena(x1[0],x1[1],x1[2]);*/

// 1. Postavite "use strict" direktivu na pocetku programa u scripts.js
// Ispravite sve greske koje se javljaju.

// 2. Dodajte polje "user" u "users" pomocu spread operatora
//Spremite rezultat u novu varijablu i ispisite rezultat

// 3. Koju vrijednost vracaju console.log izjave? probajte zamjenit let sa var.
// "use strict";


"use strict"

// 1.

var a = 78;
var b = 34;
// delete a;
// delete window.b;
var myObject = { property: 1, property2: 2, property1: 1 };

// 2. 
const users = [
    { name: "Fabio", surname: "Biondi" },
    { name: "Mario", surname: "Rossi" },
];
const user = { name: "Lorenzo", surname: "Verdi" };

var allUsers = [...users, user];

console.log(`drugi user = ${allUsers[2].name} i prezime = ${allUsers[2].surname}`);

// 3.

for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log("The number is " + i);
    }, 1000);

    console.log(i);
}

