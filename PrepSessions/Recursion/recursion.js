function isFibo(valueToCheck, previousValue = 0,currentValue = 1) {
    if(valueToCheck === 0 || valueToCheck === 1) {
        return true;
    }
    if(currentValue > valueToCheck) {
        return false;
    }
    if (currentValue === valueToCheck) {
        return true;
    }

    return isFibo(valueToCheck, currentValue, currentValue + previousValue);
}

console.log(isFibo(20))