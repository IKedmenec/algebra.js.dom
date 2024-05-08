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

var divInfo = document.querySelector(".info");
divInfo.classList.add("sakrij");

var body
