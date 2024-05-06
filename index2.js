var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Ovo je text unutar h1"));

var dDescr = document.querySelector(".description");
console.log("dDescr--> " + dDescr);

dDescr.parentNode.prepend(h1);

var h2 = document.createElement("h2");
h2.appendChild(document.createTextNode)("Ovo je tekst unutar h2");

dDescr.parentNode.append(h2);