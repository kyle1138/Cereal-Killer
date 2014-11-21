//var J = 10;
//var Q = 10;
//var K = 10;
//var A = 1;


var range = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"]

var spades = range
var clubs = range
var diamonds = range
var hearts = range

var deck = [spades , clubs , diamonds ,hearts]
var suna = ["spades" , "clubs" , "diamonds" , "hearts"]

for(suit = 0; suit < 4; suit ++){

deal = deck[suit]

  for(card = 0; card < 13; card ++)
    console.log(deal[card] + " of " + suna[suit])

}
