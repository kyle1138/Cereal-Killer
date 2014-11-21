var word = process.argv[2];
var lth = word.length;
var count = 1;
var score = 0;

while (count < lth){
  if (word.slice((count-1),(count+1)) === "oo"){score ++}
    else{}
      count ++
};

count = 1

while (count < (lth-1)){
  if (word.slice((count-1),(count+2)) === "ooo"){score = 0}
    else{}
      count ++
};




if(score = 1){console.log("VALID")}else{console.log("INVALID")};
