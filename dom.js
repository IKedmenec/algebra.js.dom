console.log("Visina je: " + window.innerHeight);
console.log("Sirina je: " + window.innerWidth);

console.log("Domena je: " + window.location.hostname);

var winLocation = window.location;

console.log("Window location: " + window.location);

var x = window.confirm("Ovime prihvacate nasu politiku o cookies");
console.log("response = " + x);
if (x == true){
    console.log("Korisnik odgovorio Ok");

} else {
    console.log("Korisnik odgovorio NOk");
    window.location = "onama.html";
}
