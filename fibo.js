var seq = process.argv [2];
var fibo = [0,1];

for( x = 0; x < seq; x ++ )
  {


    console.log(fibo[x])
    fibo.push( fibo[x] + fibo[x+1] )




  }
