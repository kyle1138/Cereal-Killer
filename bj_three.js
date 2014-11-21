var range = [ "Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "King", "Queen"];
var suit = ["spades" , "clubs" , "diamonds" , "hearts"];
var x = 0;
var deal = [];
var pull ="";
var rv = Math.floor(Math.random()*13)
var sv = Math.floor(Math.random()*4)
var check = 0

for(x=0; deal.length < 52; x++){

rv = Math.floor(Math.random()*13);
sv = Math.floor(Math.random()*4);

pull = range[rv] + " of " + suit[sv];
deal[x] = pull

check = 0

while (check < deal.length){

if (deal[check-1] === pull){
 deal.pop()
   x = x-1
console.log(deal[check-1] + " RESHUFFLE " + pull)
 }
check ++

}
}
console.log(deal);
var x = 0;
var y = 0;
var z = 0;
var hand = 0;
var scor = 0;

while(hand < 51){
x=0;
y=0;
z=0;
scor = 0;
  for(scor = 0; scor <=12; scor ++){

  if ((deal[hand].charAt(0)).toString() == (range[scor].charAt(0)).toString()){

  x = scor + 1} //console.log(deal[hand].charAt(0) + " " + range[scor].charAt(0))

}
scor = 0;
for(scor = 0; scor <=12; scor ++){

  if ((deal[hand+1].charAt(0)).toString() == (range[scor].charAt(0)).toString()){
  y = scor + 1}//else{y=0}//console.log(deal[hand+1].charAt(0) + " " + range[scor].charAt(0))

}
scor = 0;
for(scor = 0; scor <=12; scor ++){

  if ((deal[hand+2].charAt(0)).toString() == (range[scor].charAt(0)).toString()){

  z = scor + 1}//else{z=0}//console.log(deal[hand+2].charAt(0) + " " + range[scor].charAt(0))
}

if(x > 10){x = 10}
if(y > 10){y = 10}
if(z > 10){z = 10}
score = x + y + z
if (score > 21){score = score + " BUST!"}
  console.log()
  console.log(deal[hand] + " " + deal[hand+1] + " " + deal[hand+2] + " for a score of " +score)
  hand = hand + 3

}
