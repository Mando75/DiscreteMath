 // A function that counts solutions for a given predicate. 
 // Takes a max number of iterations, as well as a predicate. 
 // There is an optional third parameter, min, if you do not 
 // wish to start counting at zero
 function countSolutions(max, pred, min = 0) {
    let counter = 0;
    for (let i = min; i < max; i++) {
       pred(i) ? counter++ : null;
    }
    console.log("total",counter);
  }
 
 
  function teu_loops(i) {
    let val = i,
        sum = 0, 
        ones = 0;
   
    while (val) {
      if (ones > 1) {
        return false;
      }
      if (val % 10 === 1) {
        ones++;
      }
      sum += val % 10;
      val = Math.floor(val / 10);
    }
    if (sum != 17){
      return false;
    }
    return true;
  }
  countSolutions(1000000,teu_loops);