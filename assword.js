var word = process.argv[2];
var lth = word.length;
var count = 1
var score = 0

while (count <= lth){
  if (word.slice((count-1),count) === "o"){score = score +1}
    else{}
      count ++
}

if(score === 2){console.log("VALID")}else{console.log("INVALID")};
