var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Ovo je text unutar h1"));

var dDescr = document.querySelector(".description");
dDescr.parentNode.prepend(h1);

/*var divInfo = document.createElement("div");
divInfo.classList.add("info");

dDescr.parentNode.insertBefore(divInfo,dDescr,nextSibling);*/


