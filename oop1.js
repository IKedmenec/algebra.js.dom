// Zadatak OOP1

// 1. Pratite kod u scripts.js.
// 2. Nadjite prototip objekta "character"
// (naputak: koristite metode globalnog Objecta Objecta).
// Nadjite prototip toga prototipa. Ispisite ih.
// 3. Dodajte prototipu objekta "character" funkciju koja vraca jedan
// (slucajno odabran) citat iz niz "quotes".

var character = {
    name: "Eleven",
    show: "Stranger Things",
    portrayedBy: "Millie Bobby Brown",
};

const quotes = [
    "I'm going to my friends. I'm going home.",
    "Pure fuel! PURE FUEL! WOO!",
    "See? Zoomer.",
    "Bitching.",
];

var proto1 = Object.getPrototypeOf(character);
console.log(proto1);


// Nadjite prototip toga prototipa. Ispisite ih.
// Nema prototip prototipa, referenca ne moze ic na drugu referencu
// Prototip prototipa == null

var proto2 = Object.getPrototypeOf(proto1);
console.log(proto2);

// 3. Dodajte prototipu objekta "character" funkciju koja vraca jedan
// (slucajno odabran) citat iz niz "quotes".

proto1.dodaj = function () {
    let x = Math.random() * quotes.length;
    let flor = Math.floor(x);
    console.log("random=" + x);
    console.log("flor=" + flor);
    return quotes[flor];
};

console.log(proto1.dodaj());