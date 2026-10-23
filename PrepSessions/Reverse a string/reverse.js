function reverse(sen) {
    let newStr = [];
    const reversed = sen.split(" ").reverse();
    for(let i = 0; i < reversed.length; i++) {
        newStr += reversed[i];
    }
    return newStr;    
}
console.log(reverse("Hello world"))