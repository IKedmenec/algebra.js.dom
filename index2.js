var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Ovo je text unutar h1"));

/*
var dDescr = document.querySelector("body");
console.log(bodyElem);

//vodyElem.prepend(h1); 
*/

var dDescr = document.querySelector(".description");
dDescr.parentNode.prepend(h1); 

// kreiramo novi objekt u memoriji div sa class atributom i vrijednosti info
// <div class="info"></div> 

var divInfo = document.createElement("div");
divInfo.classList.add("info");

// nalazimo element sa id=footer
// insertamo na body novi kreirani objekt i inseratamo prije footer elementa

var footElement = document.querySelector("#footer");
footElement.parentNode.insertBefore(divInfo, footElement); 

// trebamo naci <ul> element

var ul = document.querySelector("ul"); // dohvacen iz memorije (DOM-a)
// var li = document.createElement("li"); // kereiramo novi objekt u memoriji

console.log("UL ima LI elemenata: " + ul.childElementCount); 

// debbuger;
// prvi nacin brisanja elemenata iz UL
/* for (let i = ul.childElementCount; i > 0; i --) {
    let child = ul.childreni[i - 1];
    ul.removeChild(child);
}
*/

// drugi nacin brisanja elemenata iz UL

while (ul.childElementCount > 0) {
    let child = ul.children[0];
    ul.removeChild(child);
}


for (let i = 0; i < 3; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
}

/* var li1 = document.createElement("li");
var li2 = document.createElement("li");

ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
*/

/*
var divInfo = document.createElement("div");
divInfo.classList.add("info");

dDescr.parentNode.insertBefore(divInfo,dDescr,nextSibling); 
*/




