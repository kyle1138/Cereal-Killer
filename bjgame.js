var range = [ "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "King", "Queen"]
var suit = ["spades" , "clubs" , "diamonds" , "hearts"]
var spades = range;
var hearts = range;
var clubs = range;
var diamonds = range;

var deal1 = [0,0];

var score1 = Math.floor(Math.random()*13);
deal1[0] = range[score1];
deal1[1] = suit[(Math.floor(Math.random()*4))];

console.log(deal1);

var deal2 = [0,0];


var score2 = Math.floor(Math.random()*13)
deal2[0] = range[score2]
deal2[1] = suit[(Math.floor(Math.random()*4))]

console.log("2nd card")
console.log(deal2);

while ( deal1[0] === deal2[0] && deal1[1] === deal2[1])
  {
  console.log("RESHUFFLE")
var score2 = Math.floor(Math.random()*13)
deal2[0] = range[score2]
deal2[1] = suit[(Math.floor(Math.random()*4))]
}

console.log("2nd card");
console.log(deal2);

if (score1 > 9){score1 = 9}else{};
if (score2 > 9){score2 = 9}else{};
console.log(score1 + score2 + 2);
