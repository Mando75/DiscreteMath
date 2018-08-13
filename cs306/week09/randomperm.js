


function getRandomPermuation(wordlist) {
  let randomPerm = [];  
  while(wordlist.length > 0) {
    let randomElementIndex = Math.floor(Math.random() * wordlist.length);
    let randomElement = wordlist[randomElementIndex];
    randomPerm.push(randomElement);
    wordlist.splice(randomElementIndex,1);
  }
  return randomPerm.join(' ');
}

let exampleSet = new Set();

for (let i = 0; i < 20000; i++) {
  const wordlist = ['digit', 'be', 'to', 'just', 'a', 'any', 
 'numbers', 'or', 'pattern', 'first', 'reason', 'appear', 'on', 'look',  'ten',
 'that', 'for', 'in', 'random', 'the'];
  exampleSet.add(getRandomPermuation(wordlist));
}

console.log(exampleSet.values());
