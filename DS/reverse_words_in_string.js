// Given an input string s, reverse te order of the words

// Input: "The sky is blue" >>> "blue is the sky"
// Input: " Hello world " >>> "world hello" strim the spaces

function reverse(s) {
    const splitS = s.split(" "); // split by spacing and produce ["The", "red", "car"]
    const stack = [];

    for(let i of splitS) {
        stack.push(i); // push each word into an array called stack. LIFO puts car on top and The at the bottom of the stack
    }

    let finalS = "";

    while(stack.length) {
        const current = stack.pop(); // pop() will remove and return last item, which will be = current = car.

        if(current) { // there is something in the current, our current will have car
            finalS += " " + current; // add the current word to the final string
        }
    }

    return finalS.trim();
}

console.log(reverse("The sky is blue"));
console.log(reverse(" Hello World "));