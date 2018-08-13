function findRoot(x, target, it = 0) {
    if (!target) {
        target = x;
    }
    if(it > 10) return null;
    const half = Math.floor(x / 2)
    const sqr = half * half;
    if (sqr === target) {
        console.log(`equal ${Math.floor(x)} and ${sqr}`);
        return Math.floor(x);
    }
    if (sqr > target) {
        console.log(`sqr greater than target sqr: ${sqr} x: ${x} target: ${target} x/2: ${Math.floor(x/2)}`)
        return findRoot(half, target, ++it);
    } else {
        console.log(`sqr less than target sqr: ${sqr} x: ${x} target: ${target} x/2 + x: ${Math.floor(x + (x/2))}`)
        return findRoot(half * 1.5, target, ++it)
    }
}

const x = parseInt(process.argv[2]);
console.log(x)
console.log(findRootFloor(x));

function findRootFloor(x) {

    // if x = 0 or 1, we have already found the square root. Return
    if (x == 0 | x == 1) {
        return x;
    }
    
    // define our variables for a binary search
    let begin = 1,
        end = Math.floor(x/2), 
        answer = null;

    // begin our binary search
    while(begin <= end) {
        // Find the middle value 
        const middle = Math.floor((begin + end) / 2);

        // get the square of the middle value
        const sqr = middle * middle;

        // if the square of the middle value is equal to the target, return the target
        if (sqr === x) {
            return middle;
        }

        // if the square is less than x, increase the value of middle and try again
        // this new value of middle may be correct, so set it to answer.
        if (sqr < x) {
            begin = middle + 1;
            answer = middle;
        } else {
        // if the square is greater than x, reduce middle
            end = middle - 1;
        }
    }
    return answer;
}