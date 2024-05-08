var ul = document.querySelector("ul");
// jedan od nacina je da UL elementu dodjelimo syle "decimal"
// ul.style.listStyle = "decimal";

// drugi nacin je da iteriramo kroz UL i svakom od LI elemenata promjenimo svojstvo na "decimal"

var i = 1;
for (let elem of ul.children) {
    elem.style.listStyle = "decimal";
    //elem.textContent = i + ". " + elem.textContent;
    i++;
}

// nadji div sa klasom "info"
var divInfo = document.querySelector(".info");
// na div-u sa klasom "info" dodaj novu klasu "sakrij" koju smo definirali u css-u
divInfo.classList.add("sakrij");

// dohvacamo "body" objekt
var body = document.querySelector("body");
// dohvacamo prijenjene styles na body objektu
var bodyWindow = window.getComputedStyle(body, null);
//citamo pojedino svojstvo, u ovom slucaju "margin-left"
var marginBody = bodyWindow.getPropertyValue("margin-left");
console.log("marginBody: " + marginBody);

var bckgColor = bodyWindow.getPropertyValue("background-color");
console.log("background-color: " + bckgColor);
