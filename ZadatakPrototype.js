// constructor Ososba

function Osoba() {
    (this.ime = "Ana"), (this.godine = 25);
}

var osoba1 = new Osoba();
osoba1.brojCipela = 38
osoba1
console.log("Osoba1 => ime:" + osoba1.ime + "; ima godine: " + osoba1.godine + "; broj cipela: " + osoba1.brojCipela);

Osoba.prototype.spol = "Zensko";

console.log("Osoba1 => ime:" + osoba1.ime + "; ima godine: " + osoba1.godine + " ; spol: " + osoba1.spol);

var osoba2 = new Osoba();
osoba2.brojCipela = 36;
osoba2.godine = 35;
osoba2.ime = "Marko";
osoba2.spol = "Muski";
osoba2.pozdrav = function () {
    return "Bok";
}

console.log("Osoba2 => ime:" + osoba2.ime + "; ima godine: " + osoba2.godine + " ; spol: " + osoba2.spol + "; broj cipela: " + osoba1.brojCipela);
