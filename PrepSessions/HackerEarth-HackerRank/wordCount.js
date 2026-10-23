function wordCount(str) {
    let count = {};
    const newStr = str.toUpperCase().split(" ");
    for(word of newStr) {
        if(count[word]) {
            count[word] += 1;
        } else {
            count[word] = 1;
        }
    }
return count;
}

console.log(wordCount("My name is Xyz He is Abc Is he allright"));