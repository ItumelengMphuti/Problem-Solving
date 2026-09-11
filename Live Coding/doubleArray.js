function double (arr) {
    
    return arr.filter(num => num % 2 === 0).map(n => n *2)
}
console.log(double([1,2,3,4,5,6]))