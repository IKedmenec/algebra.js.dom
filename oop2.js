// 1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i oznacava ime psa.
// Defaultna vrijednost imena psa je "Rex"

// 2. Kreirajte objekt iz Dog funkcije.

// 3. Dodajte Dog funkciji metodu koja vraca postavljeno ime psa. 
// Pozovite ju iz novostvorenog objekta i ispisite rezultat.


// 1.

function Dog(name) {
    this.dogName = name || "Rex";
}

    /*console.log("name = "+ name);
    if (name == undefined) {
    // if(!name) {
        this.dogName = "Rex";
    } 
    else {
        this.dogName = name;
    }
}*/


// 2. - > defaultno ime psa ukoliko ne prosljedimo ime psa

var dog = new Dog();
console.log("Ime psa = " + dog.dogName);

// 2.b - > ako prosljedimo ime psa

var dog1 = new Dog("Loki");

console.log("Ime psa = " + dog1.dogName);


// 3. 


Dog.prototype.imePsa = function() {
    return this.dogName;
};

Dog.prototype.bark = function() {
    return "Wuf Wuf";
};

console.log("Ime psa1 (dog) preko metode = " + dog.imePsa());
console.log("Ime psa2 (dog2) preko metode = " + dog1.imePsa());

console.log("Pas1 (dog) se glasa = " + dog.bark());
console.log("Pas2 (dog2) se glasa = " + dog1.bark());










    




