var sug = process.argv[2];


var app = ["Apple","Cap'n","Cinnamon","Cocoa","Frosted","Fruit","Honey Bunches of", "Raisin", "Shredded","Toasted"];
var jack = ["Bran","Crunch","Crisp","Flakes" , "Jacks" , "Krispies" , "Loops","Pebbles","Pops","Puffs"];


for (cer = 1; cer <= sug; cer ++){
//console.log(app[Math.floor(Math.random()*app.length)])
console.log(app[Math.floor(Math.random()*app.length)] + " " + jack[Math.floor(Math.random()*jack.length)])



}
