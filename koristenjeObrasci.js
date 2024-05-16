var brojanje = require('./obrasci');

// krenuli smo total walk = 0

console.log("Total steps = " + brojanje.getTotalSteps()); // 0

brojanje.walk();

console.log("Total steps = " + brojanje.getTotalSteps()); // 1

brojanje.walk();

console.log("Total steps = " + brojanje.getTotalSteps()); // 2

brojanje.walk();

console.log("Total steps = " + brojanje.getTotalSteps()); // 3

brojanje.run();

var total = brojanje.getTotalSteps();
console.log("Total steps = " + total); 


