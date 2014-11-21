
var arr = [];



for(count = 1; count <= 100;count ++){
  arr.push(count);
}

var guess = Math.random()*100
console.log(arr[Math.floor(guess)]);
console.log(guess);
