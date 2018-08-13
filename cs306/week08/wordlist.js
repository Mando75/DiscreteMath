const wordlist = ['digit', 'be', 'to', 'just', 'a', 
                   'any', 'numbers', 'or', 'pattern', 'first', 
                  'reason', 'appear', 'on', 'look',  'ten','that', 'for', 'in',
                    'random', 'the'];

const sorted = wordlist.sort((a,b) => {
    return a.length - b.length;
});

console.log(sorted.join(' '));
