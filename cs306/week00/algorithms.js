function algorithm1(a, b) {
    let x = Math.floor(a/b);
    let list = new Array(b);
    list.fill(x)

    let y = Math.floor(b/2),
        i = 0,
        j = b - 1

    while(y >= 0) {
        console.log(list);
        let k = list[i] - y;
        list[i] = k;
        list[j] = list[j] + y;
        i++;
        j--;
        y--;
    }

    let lastIndex = list.length - 1;
    list[lastIndex] = list[lastIndex] + (a % b);
    let sum = list.reduce((x,t) => x + t)
    console.log(list);
    console.log(`target: ${a}`)
    console.log(`sum of unequal parts: ${sum}`)
    if(list.length === b && sum === a) {
        console.log('success');
        return true;
    } else {
        console.log('failure');
        return false;
    }
}

// algorithm1(34, 4)

function algorithm3(a, b) {
    let stack = [];
    let i = 1; 
    stack.push(a);
    do {
        let x = stack.pop();
        stack.push(i)
        stack.push(x - i);
        i++
        console.log(stack)
    } while (stack.length < b);
    console.log(stack);
    return stack
}


algorithm3(34,4)