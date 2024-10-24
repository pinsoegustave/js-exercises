function bigWord(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

console.log(bigWord("Return an array consisting of the largest number from each provided"));