var rijeke = ["Drava", "Bijelo", "Plava", "Osjecko", "Lega"];

var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Osijek"));


// trazimo body element
var bodyElem = document.querySelector("body");
// na njega dodajemo kao prvi element (prepend) h1 element
bodyElem.prepend(h1);

// trazimo div element s klasom "description"
var dDescr = document.querySelector(".description");
// njegov inner html mijenjamo sa svojim custom html-om
dDescr.innerHTML = "Grad na <h3>Dravi</h3>";

// kreiramo novi objekt u memoriji div sa class atributom i vrijednosti info
// <div class="info"></div> 

var divInfo = document.createElement("div");
divInfo.classList.add("info");
divInfo.innerText = "Peta stvar je piva.";

// nalazimo element sa id=footer
// insertamo na body novi kreirani objekt i inseratamo prije footer elementa

var footElement = document.querySelector("#footer");
footElement.parentNode.insertBefore(divInfo, footElement);

// trebamo naci <ul> elemente
var ul = document.querySelector("ul"); 

// maknemo sve li elemente iz templatea-a
 for (let i = ul.childElementCount; i > 0; i--) {
    let child = ul.children[i - 1];
    ul.removeChild(child);
}

// dodajemo nove li elemente s tim da na svaki li element dodajemo i text/content

for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.textContent = rijeke[i];
    ul.appendChild(li);
}